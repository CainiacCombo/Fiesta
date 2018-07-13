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
import { LoadingUiProvider } from '../../providers/loading-ui/loading-ui';

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
    public loadingUIProvider: LoadingUiProvider,
    private store: Store<AppState>,
  ) { }

  googleLogin() {
    this.loadingUIProvider.load(
      async () => {
        const googleUser = await this.userProvider.googleSignin();
        const user = await this.userProvider.findUser({ googleId: googleUser.googleId });
        await (!user
          ? this.navCtrl.push('SignupPage', { googleUser, authenticate: this.authenticate.bind(this) })
          : this.authenticate(user, googleUser.accessToken));
      },
      'We couldn\'t log you in with Google. Try Again.',
      {
        loadingOptions: { content: 'Logging you in' },
      },
    );
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
        this.navCtrl.setRoot('HomePage', null);
      });
  }

}
