import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';

import { Party } from '../../../interfaces/Party';
import { Message } from '../../../interfaces/Message';
import { AppState } from '../../../store/reducers';
import { PartyProvider } from '../../../providers/party/party';
import { UserProvider } from '../../../providers/user/user';
import { RateComponent } from '../../../components/rate/rate';
import { UploadComponent } from '../../../components/upload/upload';
import { app } from '../../../feathers';
import { AddUserParties } from '../../../store/parties/parties.actions';

@IonicPage()
@Component({
  selector: 'page-party',
  templateUrl: 'party.html',
})
export class PartyPage implements OnInit, OnDestroy{

  messages: Message[] = []
  message: string = ''
  party: Party
  user: any = {}
  userSub: Subscription
  isHost: boolean

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public partyProvider: PartyProvider,
    public modalCtrl: ModalController,
    private store: Store<AppState>,
    private userProvider: UserProvider,
  ) {
    this.party = navParams.get('party')
    this.onNewMessage = this.onNewMessage.bind(this);
    this.onGameCreated = this.onGameCreated.bind(this);
  }

  ngOnInit() {
    app.service('group-messages').on('created', this.onNewMessage);
    app.service('game').on('created', this.onGameCreated);

    this.userSub = this.store.select('user').subscribe(user => {
      this.user = user
      
      this.userProvider.getHostOfParty(this.party.id, this.user.id)
      .then(response => this.isHost = response.total > 0);
    });

    this.partyProvider.getPartyMessages(this.party.id).then(response => this.messages = response.data);
    this.checkForGame();

  }

  ngOnDestroy() {
    app.service('group-messages').off('created', this.onNewMessage);
    app.service('game').off('created', this.onGameCreated);
    this.userSub.unsubscribe();
  }

  checkForGame() {
    this.partyProvider.findGame(this.party.id).then((games) => {
      const game = games[0];
      if (game) {
        this.navCtrl.push('PartyGamePage', { party: this.party, game });
      }
    });
  }

  exitChat() {
    this.navCtrl.setRoot('PartyPage');
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

  onNewMessage(newMessage) {
    this.partyProvider.getGroupMessageUser(newMessage).then((message) => {
      if (message.user_id != this.user.id) {
        this.messages.push(message);
      }
    });
  }

  onGameCreated(game) {
    if (game.party_id == this.party.id) {
      this.checkForGame();
    }
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

    this.modalCtrl.create('PartyInfoPage', { party }).present()
  }

  goToRate() {
    const { party } = this;
    this.modalCtrl.create(RateComponent, { party }).present();
  }

  goToUpload() {
    this.modalCtrl.create(UploadComponent, {
      party: this.party,
      upload: dataUri => this.partyProvider.uploadToStory({
        dataUri,
        userId: this.user.id,
        party_id: this.party.id
      })
      .then(() => this.partyProvider.getUserParties(this.user.id))
      .then((parties) => this.store.dispatch(new AddUserParties(parties)))
    }).present();
  }

}
