import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TabsPage } from '../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  googleLogin() {
    console.log('logged in with google');
    this.navCtrl.setRoot(TabsPage, null);
  }

  twitterLogin() {
    console.log('logged in with twitter');
    this.navCtrl.push(TabsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

}
