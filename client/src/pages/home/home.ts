import { Component } from '@angular/core';
import { IonicPage } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timelineRoot = 'TimelinePage'
  searchRoot = 'SearchPage'
  profileRoot = 'ProfilePage'

  constructor() {}

}
