import { Component } from '@angular/core';
import { PartyProvider } from '../../providers/party/party';
import { NavParams, ViewController } from 'ionic-angular';
import { Party } from '../../interfaces/Party';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'rate',
  templateUrl: 'rate.html'
})
export class RateComponent {

  rating: number = 0;
  party: Party

  constructor(
    public viewCtrl: ViewController,
    public partyProvider: PartyProvider,
    public store: Store<AppState>,
    navParams: NavParams) {
    this.party = navParams.get('party')
  }

  rate() {
    this.store.select('user')
      .take(1)
      .subscribe(user => this.partyProvider.rateParty({
        user_id: user.id,
        party_id: this.party.id,
        rating: this.rating,
      }))
    this.viewCtrl.dismiss();
  }

  changeRating(rating) {
    this.rating = this.rating === rating ? 0 : rating;
  }

  closeModal() {
    this.viewCtrl.dismiss();
  }

}
