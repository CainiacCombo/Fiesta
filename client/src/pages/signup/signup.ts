import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { UserProvider } from '../../providers/user/user';
import { LoadingUiProvider } from '../../providers/loading-ui/loading-ui';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  username: string = ''
  nickname: string = ''
  phone: string = ''

  constructor(
    public navParams: NavParams,
    public userProvider: UserProvider,
    public loadingUIProvider: LoadingUiProvider,
  ) { }

  onSubmit() {
    this.loadingUIProvider.load(
      () => {
        const authenticate = this.navParams.get('authenticate');
        const { accessToken, googleId, email, avatar } = this.navParams.get('googleUser');
        const { nickname, phone, username } = this;

        return this.userProvider.createUser({ username, nickname, phone, googleId, email, avatar })
          .then(user => authenticate(user, accessToken));
      },
      'Something went wrong when signing up',
    );
  }

}
