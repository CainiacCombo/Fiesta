import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  phoneNumber: string
  partyId: string

  constructor(public navParams: NavParams) {
    const party = this.navParams.get('party');
    this.partyId = party.id;
  }

  addNumber() {
    console.log(this.partyId, this.phoneNumber);
    this.phoneNumber = '';
  }

  onDone() {
    this.navParams.get('onDone')();
  }

}
