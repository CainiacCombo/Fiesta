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
<<<<<<< HEAD
  username: string = '';
=======
  userData: any;
>>>>>>> db9f2136c5f6a0c09897f043de8ee9eaff7547a2

  constructor(navParams: NavParams, public navCtrl: NavController) {
    this.userData = navParams.get('userData');
  }

  onSubmit() {
<<<<<<< HEAD
    const { nickname, phone, username } = this;
=======
    // const { nickname, phone } = this;
>>>>>>> db9f2136c5f6a0c09897f043de8ee9eaff7547a2
    this.navCtrl.push(HomePage);
    // send use provider to send PUT to user
    // console.log(this.userData);
  }

}
