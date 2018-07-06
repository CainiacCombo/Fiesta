import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Party } from '../../../interfaces/Party';

@IonicPage()
@Component({
  selector: 'page-party-game',
  templateUrl: 'party-game.html',
})
export class PartyGamePage implements OnInit {

  party: Party
  game: any

  constructor(public navCtrl: NavController, public navParams: NavParams) { }

  ngOnInit() {
    this.party = this.navParams.get('party');
    this.game = this.navParams.get('game');
  }

}
