import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, ViewController, NavParams, ModalController, ToastController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { Subscription } from 'rxjs/Subscription';
import { Party } from '../../../interfaces/Party';
import { User } from '../../../interfaces/User';
import { AppState } from '../../../store/reducers';
import { UploadComponent } from '../../../components/upload/upload';
import { app } from '../../../feathers';
import { DeviceMotion, DeviceMotionAccelerationData } from '@ionic-native/device-motion';

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
  motionSub: Subscription
  state: 'lobby' | 'starting' | 'started' | 'ended'
  matchLink: string
  chosen: boolean = false
  qrcode: any

  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams,
    public store: Store<AppState>,
    public modalCtrl: ModalController,
    private barcodeScanner: BarcodeScanner,
    private changeDetectorRef: ChangeDetectorRef,
    private deviceMotion: DeviceMotion,
    public toastCtrl: ToastController,
  ) { }

  ngOnInit() {
    this.party = this.navParams.get('party');
    this.game = this.navParams.get('game');
    this.state = this.game.state;

    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
      if (this.game.match_it_id && this.game.match_it_id == this.user.id) {
        this.chosen = true;
      }
    });

    if (this.game.name === 'hot') {
      this.motionSub = this.deviceMotion
        .watchAcceleration({ frequency: 800 })
        .subscribe((acceleration: DeviceMotionAccelerationData) => {
          // if chosen
          // if () {
            const x = Math.abs(acceleration.x)
            const y = Math.abs(acceleration.y)
            const z = Math.abs(acceleration.z)

            if (x >= 7 || y >= 7 || z >= 15) {
              console.log('you shooook');
            } else {
              // debounce this
              // this.toastCtrl.create({
              //   message: 'Shake a little harder',
              //   duration: 4000,
              //   position: 'top',
              // }).present();
            }
          // }
        });
    }


    app.service('game').on('patched', (data) => {
      this.state = data.state;

      if (data.name === 'match') {
        if (data.state === 'starting') {
          if (data.match_it) {
            this.chosen = data.match_it.user_id == this.user.id;
          }
        } else if (data.state === 'started') {
          this.matchLink = data.match_link;
        }
      }

      this.changeDetectorRef.detectChanges();
    });
  }

  ngOnDestroy() {
    this.changeDetectorRef.detach();
    this.userSub.unsubscribe();
    if (this.motionSub) {
      this.motionSub.unsubscribe();
    }
  }

  startGame() {
    app.service('game').patch(this.game.id, { state: 'starting' });
  }

  endGame(itUserId) {
    app.service('game').patch(this.game.id, { state: 'ended', itUserId });
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
    this.barcodeScanner.scan()
      .then((barcodeData) => {
        const itUserId = barcodeData.text;
        return this.endGame(itUserId);
      });
  }

  leave() {
    this.navCtrl.setRoot('PartyPage', { party: this.party }, { animate: true, direction: 'left' });
  }

}
