import { Component, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Subscription } from 'rxjs/Subscription';
import { User } from '../../../interfaces/User';
import { AppState } from '../../../store/reducers';
import { AddUserParties } from '../../../store/parties/parties.actions';
import { PartyProvider } from '../../../providers/party/party'
import moment from 'moment';

declare var google;

@IonicPage()
@Component({
  selector: 'page-create-party',
  templateUrl: 'create-party.html',
})
export class CreatePartyPage implements OnDestroy {

  autocomplete: any
  name: string = ''
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
  ) { }

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  ionViewDidLoad(){
    var input = document.querySelector('#location input');
    this.autocomplete = new google.maps.places.Autocomplete(input, {
      types: ['address']
    });
  }

  onSubmit() {
    const { user, name, startDate, endDate, startTime, endTime, isPrivate } = this;
    const start = this.getDate(startDate, startTime);
    const end = this.getDate(endDate, endTime);
    const place = this.autocomplete.getPlace();
    const location = place.formatted_address;
    const placeLat = place.geometry.location.lat();
    const placeLong = place.geometry.location.lng();
    const party = {
      name: name,
      location: location,
      start_date: start,
      end_date: end,
      is_private: isPrivate,
      longitude: placeLat,
      latitude: placeLong,
      userId: user.id,
    };

    return this.partyProvider.createParty(party)
      .then(party => this.navCtrl.setRoot('InvitePage', {
        party,
        onDone: () => this.partyProvider.getUserParties(user.id)
          .then(parties => this.store.dispatch(new AddUserParties(parties)))
          .then(() => this.navCtrl.setRoot('PartyPage', { party }, { animate: true, direction: 'right' }))
      }, { animate: true, direction: 'right' }));
  }

  getDate(dateString, time) {
    const [year, month, day] = dateString.split('-');
    const [hour, minutes] = time.split(':');
    const date = new Date(Number(year), Number(month), Number(day), Number(hour), Number(minutes), 0);

    return moment(date).format('YYYY-MM-DD HH:mm:ss');
  }
}
