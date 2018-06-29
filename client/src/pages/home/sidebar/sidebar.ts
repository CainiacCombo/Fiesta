import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { Store } from '@ngrx/store';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap';

import { User } from '../../../interfaces/User';
import { Party } from '../../../interfaces/Party';
import { AppState } from '../../../store/reducers';
import { PartyProvider } from '../../../providers/party/party';

@IonicPage()
@Component({
  selector: 'page-sidebar',
  templateUrl: 'sidebar.html',
})
export class SidebarPage {

  query: string = ''
  parties: Array<Party> = []

  user$: Observable<User>
  parties$: Observable<Party[]>

  constructor(
    public navCtrl: NavController,
    public partyProvider: PartyProvider,
    store: Store<AppState>,
  ) {
    this.user$ = store.select('user');
    this.parties$ = store.select('parties');
    this.parties$.subscribe((parties) => {
      this.parties = parties;
    });
  }

  onQuery() {
    this.query = this.query.toLowerCase();
    this.parties$.subscribe((parties) => {
      this.parties = parties.filter(party => party.name.toLowerCase().includes(this.query));
    });
  }

  reset() {
    this.parties$
      .take(1)
      .subscribe((parties) => {
        this.parties = parties;
      });
  }

  goToParty(party) {
    // this.navCtrl.setRoot();
  }

}
