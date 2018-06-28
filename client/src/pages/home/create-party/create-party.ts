import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { query } from '@angular/core/src/animation/dsl';
import { fail } from 'assert';

/**
 * Generated class for the CreatePartyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatePartyPage');
  }

  onSubmit() {
    const {name, location, startDate, endDate, startTime, endTime, isPrivate} = this;
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
    }
    console.log(party)
    this.navCtrl.push('ProfilePage');
  }

  getDate(dateString, time) {
    const [year, month, day] = dateString.split('-');
    const [hour, minutes] = time.split(':');
    const date = new Date(Number(year), Number(month), Number(day), Number(hour), Number(minutes), 0)
    return date.toISOString();
  }
}
