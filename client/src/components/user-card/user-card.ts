import { Component, Input } from '@angular/core';
import { ModalController } from 'ionic-angular';
import { User } from '../../interfaces/User';
import { ProfileComponent } from '../profile/profile';

@Component({
  selector: 'user-card',
  templateUrl: 'user-card.html'
})
export class UserCardComponent {

  @Input('user') user: User

  constructor(public modalCtrl: ModalController) { }

  goToProfile() {
    this.modalCtrl.create(ProfileComponent, { user: this.user }).present();
  }

}
