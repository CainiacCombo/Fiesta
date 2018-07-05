import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { PartyProvider } from '../../../providers/party/party';
import { Contacts } from '@ionic-native/contacts';

@IonicPage()
@Component({
  selector: 'page-invite',
  templateUrl: 'invite.html',
})
export class InvitePage {

  phoneNumber: string
  partyId: string

  constructor(
    public navParams: NavParams,
    private contacts: Contacts,
    public partyProvider: PartyProvider,
  ) {
    const party = this.navParams.get('party');
    this.partyId = party.id;
  }

  getContact() {
    this.contacts.pickContact()
      .then(data => data.phoneNumbers[0].value)
      .then(phoneNumber => this.phoneNumber = phoneNumber);
  }

  addNumber() {
    this.partyProvider.inviteUser(this.partyId, this.phoneNumber)
      .then(() => this.phoneNumber = '')
      .catch(e => console.log('Oops', e.message))
  }

  onDone() {
    this.navParams.get('onDone')();
  }

}
