import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/Observable/forkJoin';
import { timer } from 'rxjs/Observable/timer';
import { map } from 'rxjs/operators/map';

import { Party } from '../../../interfaces/Party';
import { AppState } from '../../../store/reducers';
import { PartyProvider } from '../../../providers/party/party';
import { AddUserParties } from '../../../store/parties/parties.actions';

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage {

  query: string = ''
  parties: Party[] = []
  parties$: Observable<Party[]>
  userId: string

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public partyProvider: PartyProvider,
    private store: Store<AppState>,
  ) {
    this.parties$ = store.select('parties');
    store.select('user').take(1).subscribe(user => this.userId = user.id);
    this.reset();
  }

  onQuery() {
    this.partyProvider.getPartiesByName(this.query)
      .then(parties => this.parties = parties.data);
  }

  reset() {
    this.partyProvider.getParties()
      .then(parties => this.parties = parties.data);
  }

  isUserParty(id: string): Observable<boolean> {
    return this.parties$.pipe(
      map(parties => !!parties.find(userParty => userParty.id === id))
    );
  }

  goToParty(action: 'go' | 'join' | 'join--private', party: Party) {
    if (action === 'go') {
      this.navCtrl.push('PartyPage', { party });
    } else if (action === 'join') {
      const loading = this.loadingCtrl.create({ content: `Joining "${party.name}"` });
      const joinPartyAndGetParties = () => this.partyProvider.joinParty(this.userId, party.id)
        .then(() => this.partyProvider.getUserParties(this.userId))
        .then(parties => this.store.dispatch(new AddUserParties(parties)))

      loading.present();

      forkJoin(joinPartyAndGetParties(), timer(1000))
        .do(() => this.navCtrl.push('PartyPage', { party }))
        .take(1)
        .finally(() => loading.dismiss())
        .subscribe()
    } else if (action === 'join--private') {
      console.log('join private party');
    }
  }

}
