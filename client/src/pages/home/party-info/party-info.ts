import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { PartyProvider } from '../../../providers/party/party';
import { Party } from '../../../interfaces/Party';
import moment from 'moment';
import { UserProvider } from '../../../providers/user/user';
import { User } from '../../../interfaces/User';


@IonicPage()
@Component({
  selector: 'page-party-info',
  templateUrl: 'party-info.html',
})
export class PartyInfoPage {

  party: Party;
  users: User[] = []

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    public partyProvider: PartyProvider,
    public userProvider: UserProvider,
  ) { this.party = navParams.get('party') }

  ngOnInit() {
    this.userProvider.getUsersInParty(this.party.id)
    .then(response => this.users = response.data);
  }

  closeModal() {
    this.view.dismiss();
  }

  parseDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
  }


}
