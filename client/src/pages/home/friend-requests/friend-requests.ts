import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { IonicPage, LoadingController, ToastController } from 'ionic-angular';
import { map } from 'rxjs/operators/map';
import { FriendRequest } from '../../../interfaces/FriendRequest';
import { AppState } from '../../../store/reducers';
import { AddToFriendRequests, AddFromFriendRequests } from '../../../store/friend-requests/friend-requests.actions';
import { UserProvider } from '../../../providers/user/user';

type FriendRequestHandler = {
  friendRequest: FriendRequest
  type: 'accept' | 'decline'
  errorMessage: string
};

@IonicPage()
@Component({
  selector: 'page-friend-requests',
  templateUrl: 'friend-requests.html',
})
export class FriendRequestsPage implements OnInit, OnDestroy {

  userId: number
  userSub: Subscription
  toFriendRequests$: Observable<FriendRequest[]>
  fromFriendRequests$: Observable<FriendRequest[]>

  constructor(
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public userProvider: UserProvider,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe(user => this.userId = user.id);
    this.toFriendRequests$ = this.store.select('friend-requests').pipe(map(allFriendRequests => allFriendRequests.to));
    this.fromFriendRequests$ = this.store.select('friend-requests').pipe(map(allFriendRequests => allFriendRequests.from));
    this.getFriendRequests();
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  getFriendRequests() {
    return Promise.all([
      this.userProvider.getToFriendRequests(this.userId)
        .then(friendRequestResponse => this.store.dispatch(new AddToFriendRequests(friendRequestResponse.data))),
      this.userProvider.getFromFriendRequests(this.userId)
        .then(friendRequestResponse => this.store.dispatch(new AddFromFriendRequests(friendRequestResponse.data))),
    ]);
  }

  async handleFriendRequest(data: FriendRequestHandler) {
    const { type, errorMessage, friendRequest } = data;
    const { from_user_id, to_user_id } = friendRequest;

    const loading = this.loadingCtrl.create();
    loading.present();

    try {
      if (type === 'accept') {
        await this.userProvider.acceptFriendRequest(from_user_id, to_user_id);
        await this.getFriendRequests();
      } else if (type === 'decline') {
        await this.userProvider.declineFriendRequest(friendRequest.id);
      }
    } catch (e) {
      this.toastCtrl.create({
        message: errorMessage,
        duration: 3000,
        position: 'bottom',
      }).present();
    } finally {
      loading.dismiss();
    }
  }

  acceptFriendRequest(friendRequest: FriendRequest) {
    this.handleFriendRequest({
      friendRequest,
      type: 'accept',
      errorMessage: 'Something went wrong when acceping the friend request.',
    });
  }

  declineFriendRequest(friendRequest: FriendRequest) {
    this.handleFriendRequest({
      friendRequest,
      type: 'decline',
      errorMessage: 'Something went wrong when declining the friend request.',
    });
  }

}
