import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public userProvider: UserProvider) { }

  authenticate(userData, findBy, authentication) {
    this.userProvider.findUser(findBy)
      .then(user => !user
        ? this.navCtrl.push(SignupPage, { userData })
        : this.userProvider.authenticate(authentication)
          .then(() => this.navCtrl.setRoot(HomePage, { user }, { animate: true, direction: 'right' })))
  }

  googleLogin() {
    this.userProvider.googleSignin()
      .then(user => this.authenticate(user, { googleId: user.googleId }, {
        strategy: 'google',
        access_token: user.accessToken,
      }));
  }

  twitterLogin() {
    // this.authenticate();
  }

}
