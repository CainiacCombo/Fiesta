import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, App, NavController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../../interfaces/User';
import { Party } from '../../../interfaces/Party';

import { Observable } from 'rxjs/Observable';

import { AppState } from '../../../store/reducers';
import { Logout } from '../../../store/user/user.actions';

import { FriendsPage } from '../friends/friends';
import { LoginPage } from '../../login/login';
import { UserProvider } from '../../../providers/user/user';
import moment from 'moment';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit, OnDestroy {

  user: User
  parties: Array<Party> = []
  userSub: Subscription
  parties$: Observable<Party[]>

  constructor(
    public app: App,
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public userProvider: UserProvider,
    private store: Store<AppState>,
  ) { 
    this.parties$ = store.select('parties');
    this.parties$.subscribe((parties) => {
      this.parties = parties;
    });
  }

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  goToFriendsList() {
    this.navCtrl.push(FriendsPage);
  }

  goToEditProfile() {
    this.modalCtrl.create('EditProfilePage').present();
  }

  signout() {
    this.userProvider.googleSignout()
      .then(() => this.app.getRootNav().setRoot(LoginPage, null, { animate: true, direction: 'left' }))
      .then(() => this.store.dispatch(new Logout()))
  }

  parseDate(date) {
    return moment(date).format('MMMM Do YYYY');
  }

}
