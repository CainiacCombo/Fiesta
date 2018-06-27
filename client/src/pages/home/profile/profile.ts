import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { FriendsPage } from '../friends/friends'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
  }

  goToFriendsList() {
    console.log('go to friends list');
    this.navCtrl.push(FriendsPage);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  editProfile() {
    const editModal = this.modalCtrl.create('EditProfilePage');
    editModal.present();
  }  

}