import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { UserProvider } from '../../providers/user/user';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  nickname: string = '';
  phone: string = '';
  username: string = '';
  userData: any;

  constructor(navParams: NavParams, public navCtrl: NavController, public userProvider: UserProvider) {
    this.userData = navParams.get('userData');
  }

  onSubmit() {
    const { nickname, phone, username, userData } = this;
    const user = {
      'username': username,
      'nickname': nickname,
      'phone': phone,
      'googleId': userData.googleId,
      'email': userData.email,
      'avatar': userData.avatar,
      'accessToken': userData.accessToken,
    }
    this.userProvider.createUser(user);
    this.navCtrl.push(HomePage);
<<<<<<< HEAD
    // send use provider to send PUT to user
    console.log(this.userData);
=======
>>>>>>> a6eefb15f2d477dcc2b6b38924ce8cdbb0253adb
  }

}
