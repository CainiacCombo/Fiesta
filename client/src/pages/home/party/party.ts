import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Party } from '../../../interfaces/Party';
import { Message } from '../../../interfaces/Message';
  
import { PartyProvider } from '../../../providers/party/party';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { RateComponent } from '../../../components/rate/rate';
import { UploadComponent } from '../../../components/upload/upload';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage implements OnInit, OnDestroy{

  messages: Message[] = [];
  message: string = '';
  party: Party;
  user: any = {};
  userSub: Subscription;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public partyProvider: PartyProvider,
    public modalCtrl: ModalController,
    private store: Store<AppState>,) {
    this.party = navParams.get('party')
  }

  ngOnInit() {
    const party = this.party;
    this.partyProvider.getPartyMessages(party.id)
    .then(response => {
      this.messages = response.data
    });

    this.userSub = this.store.select('user').subscribe(user => {
      console.log(JSON.stringify(user))
      this.user = user
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe()
  }

  exitChat() {
    this.navCtrl.setRoot('PartyPage')
  }

  onSend() {
    const { message, messages } = this;
    const newMessage = {
      text: message,
      user_id: this.user.id,
      party_id: this.party.id,
    };

    this.partyProvider.createMessage(newMessage)
    .then(message => messages.push(message))
    .catch(() => console.log('ERROR WHEN CREATING MESSAGE'))
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

  goToRate() {
    const { party } = this;
    const partyModal = this.modalCtrl.create(RateComponent, { party })
    partyModal.present();
  }
  
  goToUpload() {
  this.modalCtrl.create(UploadComponent, { party: this.party }).present();   
  }

}
