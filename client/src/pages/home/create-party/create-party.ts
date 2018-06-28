import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { query } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';
import { User } from '../../../interfaces/User';
import { Subscription } from 'rxjs/Subscription';
import { Store } from '@ngrx/store';
import { AppState } from '../../../store/reducers';
import { PartyProvider } from '../../../providers/party/party'

@IonicPage()
@Component({
  selector: 'page-create-party',
  templateUrl: 'create-party.html',
})
export class CreatePartyPage {

  name: string = '';
  location: string = '';
  startDate: string = '';
  endDate: string = '';
  startTime: string = '';
  endTime: string = '';
  isPrivate: boolean = false;
  longitude: string = '';
  latitude: string = '';
  user: User;
  userSub: Subscription

  constructor(public partyProvider: PartyProvider, 
    private store: Store<AppState>, 
    public navCtrl: NavController, 
    public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePartyPage');
  }

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
    });
  }

  onSubmit() {
    const {user, name, location, startDate, endDate, startTime, endTime, isPrivate} = this;
    const start = this.getDate(startDate, startTime);
    const end = this.getDate(endDate, endTime);
    console.log(start, end);
    const party = {
      name: name,
      location: location,
      start_date: start, 
      end_date: end,
      isPrivate: isPrivate,
      longitude: 'haha nope',
      latitude: 'you thought',
      userId: user.id,
    }
    console.log(party)
    this.partyProvider.createParty(party)
    //send to party page
  }

  getDate(dateString, time) {
    const [year, month, day] = dateString.split('-');
    const [hour, minutes] = time.split(':');
    const date = new Date(Number(year), Number(month), Number(day), Number(hour), Number(minutes), 0)
    return date.toISOString();
  }
}
