import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { TimelinePage } from '../timeline/timeline'

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToFriendsList() {
    console.log('go to friends list');
    // this.navCtrl.push(TimelinePage);
  };

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

}
