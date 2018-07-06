import { Component } from '@angular/core';
import { NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { PartyProvider } from '../../providers/party/party';

@Component({
  selector: 'create-game',
  templateUrl: 'create-game.html'
})
export class CreateGameComponent {

  name: 'match' = 'match'
  party_id: number

  constructor(
    navParams: NavParams,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public viewCtrl: ViewController,
    public partyProvider: PartyProvider,
  ) {
    this.party_id = navParams.get('party_id');
  }

  async create() {
    const { name, party_id, loadingCtrl, toastCtrl, partyProvider } = this;
    const loading = loadingCtrl.create();

    loading.present();

    try {
      await partyProvider.createGame({ name, party_id });
    } catch (e) {
      toastCtrl.create().present();
    } finally {
      loading.dismiss();
    }
  }

}
