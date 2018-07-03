import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Party } from '../../../interfaces/Party';
import { PartyProvider } from '../../../providers/party/party';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { UploadComponent } from '../../../components/upload/upload';
import { RateComponent } from '../../../components/rate/rate';

@IonicPage()
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage {

  messages: string[] = [];
  message: string = '';
  party: Party;
  userid: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public partyProvider: PartyProvider,
    public modalCtrl: ModalController,
    store: Store<AppState>,) {
    this.party = navParams.get('party')
    store.select('user').take(1).subscribe(user => this.userid = user.id);
  }

  exitChat() {
    this.navCtrl.setRoot('PartyPage')
  }

  onSend() {
    const { message, messages } = this;
    const newMessage = {
      text: message,
      user_id: this.userid,
      party_id: this.party.id,
    }
    messages.push(newMessage.text);
    this.partyProvider.createMessage(newMessage)
  }

  getPartyInfo() {
    const { party } = this;
    const startTime = party.start_date;
    const startTimeDate = new Date(startTime);
    const start = startTimeDate.toString()
    const endTime = party.start_date;
    const endTimeDate = new Date(endTime);
    const end = endTimeDate.toString()
    party.end_date = end;
    party.start_date = start;
    const partyModal = this.modalCtrl.create('PartyInfoPage', { party })
    partyModal.present();
  }

  goToUpload() {
  this.modalCtrl.create(UploadComponent, { party: this.party }).present();   
  }
  
  goToRate() {
    const { party } = this;
    const partyModal = this.modalCtrl.create(RateComponent, { party })
    partyModal.present();
  }

}
