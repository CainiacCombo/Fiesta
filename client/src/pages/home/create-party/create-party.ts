import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../interfaces/User';
import { AppState } from '../../../store/reducers';
import { AddUserParties } from '../../../store/parties/parties.actions';
import { PartyProvider } from '../../../providers/party/party'

@IonicPage()
@Component({
  selector: 'page-create-party',
  templateUrl: 'create-party.html',
})
export class CreatePartyPage implements OnDestroy {

  name: string = ''
  location: string = ''
  startDate: string = ''
  endDate: string = ''
  startTime: string = ''
  endTime: string = ''
  isPrivate: boolean = false
  longitude: string = ''
  latitude: string = ''

  user: User
  userSub: Subscription

  constructor(
    public partyProvider: PartyProvider,
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<AppState>,
  ) {}

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  onSubmit() {
    const { user, name, location, startDate, endDate, startTime, endTime, isPrivate } = this;
    const start = this.getDate(startDate, startTime);
    const end = this.getDate(endDate, endTime);
    const party = {
      name: name,
      location: location,
      start_date: start,
      end_date: end,
      is_private: isPrivate,
      longitude: 'haha nope',
      latitude: 'you thought',
      userId: user.id,
    };

    return this.partyProvider.createParty(party)
      .then(party => this.navCtrl.setRoot('InvitePage', {
        party,
        onDone: () => this.partyProvider.getUserParties(user.id)
          .then(parties => this.store.dispatch(new AddUserParties(parties)))
          .then(() => this.navCtrl.setRoot('PartyPage')),
      }));
  }

  getDate(dateString, time) {
    const [year, month, day] = dateString.split('-');
    const [hour, minutes] = time.split(':');
    const date = new Date(Number(year), Number(month), Number(day), Number(hour), Number(minutes), 0);

    return date.toISOString();
  }
}
