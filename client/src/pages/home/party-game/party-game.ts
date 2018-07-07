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
    });

    app.service('game').on('patched', (data) => {
      this.state = data.state;

      if (data.name === 'match') {
        if (data.state === 'starting') {
          this.chosen = data.match_it.user_id === this.user.id;
        } else if (data.state === 'started') {
          this.matchLink = data.match_link;
        }
      }
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  startGame() {
    app.service('game').patch(this.game.id, { state: 'starting' });
  }

  endGame() {
    app.service('game').patch(this.game.id, { state: 'ended' });
  }

  goToUpload() {
    this.modalCtrl.create(UploadComponent, {
      party: this.party,
      upload: dataUri => app.service('game').patch(this.game.id, {
        dataUri,
        state: 'started',
      }),
    }).present();
  }

  scanQR() {

  }

}
