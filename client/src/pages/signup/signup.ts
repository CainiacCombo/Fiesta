import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  nickname: string = '';
  phone: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit() {
    const { nickname, phone } = this;
    // send use provider to send PUT to user
  }

}
