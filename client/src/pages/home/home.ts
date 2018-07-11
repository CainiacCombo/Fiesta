import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { AppState } from '../../store/reducers';
import { FriendRequestsState } from '../../store/friend-requests/friend-requests';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timelineRoot = 'TimelinePage'
  searchRoot = 'SearchPage'
  createPartyRoot = 'CreatePartyPage'
  friendRequestsRoot = 'FriendRequestsPage'
  profileRoot = 'ProfilePage'

  friendRequests$: Observable<FriendRequestsState>

  constructor(private store: Store<AppState>) {
    this.friendRequests$ = this.store.select('friend-requests');
  }

}
