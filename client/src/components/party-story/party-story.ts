import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Party } from '../../interfaces/Party';
import { PartyProvider } from '../../providers/party/party';
import moment from 'moment';

@Component({
  selector: 'party-story',
  templateUrl: 'party-story.html'
})
export class PartyStoryComponent {

  @Input('party') party: Party

  constructor(public navCtrl: NavController, public partyProvider: PartyProvider) { }

  goToParty(party: Party) {
    this.navCtrl.push('PartyPage', { party });
  }

  getPartyStartDate(date: string) {
    return moment(date).format('MMMM YYYY');
  }

}
