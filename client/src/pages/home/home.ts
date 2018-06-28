import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timelineRoot = 'TimelinePage'
  searchRoot = 'SearchPage'
  profileRoot = 'ProfilePage'
  rootParams: any = {}

  constructor(navParams: NavParams) {
    this.rootParams.user = navParams.get('user');
  }

}
