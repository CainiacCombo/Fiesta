import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { Party } from '../../../interfaces/Party';
import { User } from '../../../interfaces/User';
import { app } from '../../../feathers';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { UploadComponent } from '../../../components/upload/upload';

@IonicPage()
@Component({
  selector: 'page-party-game',
  templateUrl: 'party-game.html',
})
export class PartyGamePage implements OnInit, OnDestroy {

  party: Party
  user: User
  game: any
  userSub: Subscription
  state = 'lobby'
  matchLink: string
  chosen: boolean = false
  

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public store: Store<AppState>,
    public modalCtrl: ModalController,
  ) { }

  ngOnInit() {
    this.party = this.navParams.get('party');
    this.game = this.navParams.get('game');
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
    })
    app.service('game').on('chosen', (data) => {
      console.log(JSON.stringify(data));
      if (data.user_id === this.user.id) {
        console.log('chosen');
        this.chosen = true;
      }
    })
    app.service('game').on('started', (data) => {
      this.state = 'started';
      console.log(JSON.stringify(data));
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  startGame() {
    app.service('game').emit('start', { 
      party_id: this.party.id,
      game_id: this.game.id
    });
    this.state = 'starting';
  }

  goToUpload() {
  this.modalCtrl.create(UploadComponent, { 
    party: this.party,
    upload() {
      
    }
  }).present();
  }

}
