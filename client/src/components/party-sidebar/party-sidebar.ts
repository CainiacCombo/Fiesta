import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { Party } from '../../interfaces/Party';
import { CreateGameComponent } from '../create-game/create-game';

@Component({
  selector: 'party-sidebar',
  templateUrl: 'party-sidebar.html'
})
export class PartySidebarComponent {

  @Input('party') party: Party

  constructor(public modalCtrl: ModalController) { }

  goToCreateGame() {
    const { party } = this;
    this.modalCtrl.create(CreateGameComponent, { party }).present();
  }

}
