import { Component, OnInit } from '@angular/core';
import { ViewController } from 'ionic-angular';
import { User } from '../../interfaces/User';
import { Party } from '../../interfaces/Party';
import { NavParams } from 'ionic-angular/navigation/nav-params';
import { UserProvider } from '../../providers/user/user';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {

  text: string;
  user: User;
  parties: Party[] = []
  partiesHosted: Party[] = []

  constructor(
    public view: ViewController, 
    public navParams: NavParams,
    public userProvider: UserProvider,
  ){
    this.user = navParams.get('user');
  }

  ngOnInit() {
    this.userProvider.getUserParties(this.user.id)
      .then((parties) => {
        this.parties = parties.data.map(groupUser => groupUser.party);
        this.partiesHosted = parties.data
          .filter(groupUser => groupUser.is_host === true)
          .map(groupUser => groupUser.party);
      });
      
  }
  
  closeModal() {
    this.view.dismiss();
  }

}
