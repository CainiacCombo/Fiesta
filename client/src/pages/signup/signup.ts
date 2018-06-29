import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  username: string = ''
  nickname: string = ''
  phone: string = ''

  constructor(public navParams: NavParams, public userProvider: UserProvider) { }

  onSubmit() {
    const authenticate = this.navParams.get('authenticate');
    const { accessToken, googleId, email, avatar } = this.navParams.get('googleUser');
    const { nickname, phone, username } = this;

    this.userProvider.createUser({ username, nickname, phone, googleId, email, avatar })
      .then(user => authenticate(user, accessToken));
  }

}
