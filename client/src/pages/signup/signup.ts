import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { Login } from '../../store/user/user.actions';
import { AppState } from '../../store/reducers';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  nickname: string = ''
  phone: string = ''
  username: string = ''
  userData: any

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public userProvider: UserProvider,
    private store: Store<AppState>,
  ) {
    this.userData = navParams.get('userData');
  }

  onSubmit() {
    const { nickname, phone, username, userData } = this;
    const { googleId, email, avatar } = userData;

    const user = {
      username,
      nickname,
      phone,
      googleId,
      email,
      avatar,
    };

    this.userProvider.createUser(user)
      .then(user => this.userProvider.authenticate(user.id, {
        strategy: 'google',
        access_token: userData.accessToken,
      }))
      .then(user => this.store.dispatch(new Login(user)))
      .then(() => this.navCtrl.setRoot(HomePage));

  }

}
