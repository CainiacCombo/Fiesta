import { Component } from '@angular/core';
import { NavParams, NavController, ViewController } from 'ionic-angular';
import { Party } from '../../interfaces/Party';
import { PartyProvider } from '../../providers/party/party';
import { LoadingUiProvider } from '../../providers/loading-ui/loading-ui';

@Component({
  selector: 'create-game',
  templateUrl: 'create-game.html'
})
export class CreateGameComponent {

  party: Party
  games = [
    {
      name: 'match',
      title: 'Match!',
      description: 'Find The Mystery Person!',
    },
    {
      name: 'hot',
      title: 'HotTot!',
      description: 'Pass That HotTot!',
    }
  ]

  constructor(
    navParams: NavParams,
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public partyProvider: PartyProvider,
    public loadingUIProvider: LoadingUiProvider,
  ) {
    this.party = navParams.get('party');
  }

  create(name) {
    this.loadingUIProvider.load(
      async () => {
        const { party, partyProvider } = this;
        const party_id = party.id;

        const game = await partyProvider.createGame({ name, party_id });
        this.navCtrl.push('PartyGamePage', { party, game });
      },
      'Oops! Something went wrong when creating your game.',
    )
  }

}
