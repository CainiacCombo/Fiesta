import { Component } from '@angular/core';
import { NavParams, LoadingController, NavController, ToastController, ViewController } from 'ionic-angular';
import { Party } from '../../interfaces/Party';
import { PartyProvider } from '../../providers/party/party';

@Component({
  selector: 'create-game',
  templateUrl: 'create-game.html'
})
export class CreateGameComponent {

  name: 'match' = 'match'
  party: Party

  constructor(
    navParams: NavParams,
    public loadingCtrl: LoadingController,
    public navCtrl: NavController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public partyProvider: PartyProvider,
  ) {
    this.party = navParams.get('party');
  }

  async create() {
    const { name, party, loadingCtrl, toastCtrl, partyProvider } = this;
    const party_id = party.id;
    const loading = loadingCtrl.create();

    loading.present();

    try {
      const game = await partyProvider.createGame({ name, party_id });
      this.navCtrl.push('PartyGamePage', { party, game }, { animate: true, direction: 'right' });
    } catch (e) {
      toastCtrl.create({
        message: 'Oops! Something went wrong when creating your game.',
        duration: 3000,
      }).present();
    } finally {
      loading.dismiss();
    }
  }

}
