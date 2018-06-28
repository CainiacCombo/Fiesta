import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { User } from '../../../interfaces/User';
import { AppState } from '../../../store/reducers';
import { FriendsPage } from '../friends/friends'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage implements OnInit, OnDestroy {

  stars = []
  emptyStars = []

  user: User
  userSub: Subscription

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
      this.stars = new Array(user.rating);
      this.emptyStars = new Array(5 - user.rating);
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  goToFriendsList() {
    this.navCtrl.push(FriendsPage);
  }

  editProfile() {
    this.modalCtrl.create('EditProfilePage').present();
  }

}
