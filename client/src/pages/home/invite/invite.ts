import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { PartyProvider } from '../../../providers/party/party';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  phoneNumber: string
  partyId: string

  constructor(public navParams: NavParams, public partyProvider: PartyProvider) {
    const party = this.navParams.get('party');
    this.partyId = party.id;
  }

  addNumber() {
    this.partyProvider.inviteUser(this.partyId, this.phoneNumber)
      .then(() => this.phoneNumber = '');
  }

  onDone() {
    this.navParams.get('onDone')();
  }

}
