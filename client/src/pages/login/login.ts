import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { IonicPage, NavController, LoadingController } from 'ionic-angular';

import { AppState } from '../../store/reducers';
import { User } from '../../interfaces/User';
import { UserProvider } from '../../providers/user/user';
import { HomePage } from '../home/home';
import { SignupPage } from '../signup/signup';
import { Login } from '../../store/user/user.actions';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user$: Observable<User>

  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public userProvider: UserProvider,
    private store: Store<AppState>,
  ) { }

  authenticate(userData, findBy, authentication) {
    this.userProvider.findUser(findBy)
      .then(user => !user
        ? this.navCtrl.push(SignupPage, { userData })
        : this.userProvider.authenticate(user.id, authentication)
           .then(user => this.store.dispatch(new Login(user)))
           .then(() => this.navCtrl.setRoot(HomePage, { user }, { animate: true, direction: 'right' })))
  }

  googleLogin() {
    const loader = this.loadingCtrl.create();
    loader.present();
    this.userProvider.googleSignin()
      .then(user => this.authenticate(user, { googleId: user.googleId }, {
        strategy: 'google',
        access_token: user.accessToken,
      }))
      .then(() => loader.dismiss());
  }

  twitterLogin() {
    // this.authenticate();
  }

}
