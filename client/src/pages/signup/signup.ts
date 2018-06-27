import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home'

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  nickname: string = '';
  phone: string = '';
  userData: any;

  constructor(navParams: NavParams, public navCtrl: NavController) {
    this.userData = navParams.get('userData');
  }

  onSubmit() {
    const { nickname, phone } = this;
    this.navCtrl.push(HomePage);
    // send use provider to send PUT to user
    console.log(this.userData);
  }

}
