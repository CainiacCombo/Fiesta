import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { HomePage } from '../home/home'
import { SignupPage } from '../signup/signup'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {}

  authenticate() {
    // this.navCtrl.setRoot(authenticated ? HomePage : SignupPage);
    this.navCtrl.setRoot(SignupPage, null, { animate: true, direction: 'right' });
  }

  googleLogin() {
    this.authenticate();
  }

  twitterLogin() {
    this.authenticate();
  }

}
