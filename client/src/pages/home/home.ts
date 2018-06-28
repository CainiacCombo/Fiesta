import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage } from 'ionic-angular';

import { Observable } from 'rxjs/Observable';
import { pluck } from 'rxjs/operators/pluck';
import { switchMap } from 'rxjs/operators/switchMap';

import { User } from '../../interfaces/User';
import { AppState } from '../../store/reducers';
import { AddUserParties } from '../../store/parties/parties.actions';
import { PartyProvider } from '../../providers/party/party';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {

  timelineRoot = 'TimelinePage'
  searchRoot = 'SearchPage'
  profileRoot = 'ProfilePage'

  user$: Observable<User>

  constructor(
    public partyProvider: PartyProvider,
    private store: Store<AppState>,
  ) {
    this.user$ = store.select('user');
  }

  ngOnInit() {
    this.user$.pipe(
      pluck('id'),
      switchMap(id => this.partyProvider.getUserParties(id)),
    )
      .do(parties => this.store.dispatch(new AddUserParties(parties.data)))
      .take(1)
      .subscribe();
  }

}
