import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { User } from '../../interfaces/User';
import { Party } from '../../interfaces/Party';
import { NavParams } from 'ionic-angular/navigation/nav-params';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent {

  text: string;
  user: User;
  pary: Party;

  constructor(
    public view: ViewController, 
    public navParams: NavParams,
  ){
    this.user = navParams.get('user');
  }

  closeModal() {
    this.view.dismiss();
  }

}
