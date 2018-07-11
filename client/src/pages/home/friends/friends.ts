import { Component, OnInit } from '@angular/core';
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
import { User } from '../../../interfaces/User';

@IonicPage()
@Component({
  selector: 'page-friends',
  templateUrl: 'friends.html',
})
export class FriendsPage implements OnInit {

  friends: User[] = []

  constructor(public navCtrl: ViewController, public navParams: NavParams) { }

  ngOnInit() {
    this.friends = this.navParams.get('friends');
  }

}
