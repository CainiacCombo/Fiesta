import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { User } from '../../interfaces/User';

import { AppState } from '../../store/reducers';
import { Login } from '../../store/user/user.actions';
import { AddUserParties } from '../../store/parties/parties.actions';
import { AddFriends } from '../../store/friends/friends.actions';
import { AddToFriendRequests, AddFromFriendRequests } from '../../store/friend-requests/friend-requests.actions';

import { UserProvider } from '../../providers/user/user';
import { PartyProvider } from '../../providers/party/party';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    public partyProvider: PartyProvider,
    private store: Store<AppState>,
  ) { }

  googleLogin() {
    const loader = this.loadingCtrl.create();

    loader.present();

    this.userProvider.googleSignin()
      .then(googleUser => this.userProvider.findUser({ googleId: googleUser.googleId })
        .then(user => !user
          ? this.navCtrl.push('SignupPage', { googleUser, authenticate: this.authenticate.bind(this) })
          : this.authenticate(user, googleUser.accessToken))
        .then(() => loader.dismiss()))
  }

  authenticate(user: User, googleAccessToken: string) {
    return this.userProvider.authenticate(user.id, googleAccessToken)
      .then(() => Promise.all([
        this.partyProvider.getUserParties(user.id)
          .then(parties => this.store.dispatch(new AddUserParties(parties))),
        this.userProvider.getToFriendRequests(user.id)
          .then(friendRequests => this.store.dispatch(new AddToFriendRequests(friendRequests.data))),
        this.userProvider.getFromFriendRequests(user.id)
          .then(friendRequests => this.store.dispatch(new AddFromFriendRequests(friendRequests.data))),
        this.userProvider.getUserFriends(user.id)
          .then(friends => this.store.dispatch(new AddFriends(friends.data))),
      ]))
      .then(() => {
        this.store.dispatch(new Login(user));
        this.navCtrl.setRoot('HomePage', null, { animate: true, direction: 'right' });
      });
  }

}
