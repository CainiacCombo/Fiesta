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
  username: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onSubmit() {
    const { nickname, phone, username } = this;
    this.navCtrl.push(HomePage);
    // send use provider to send PUT to user
  }

}
