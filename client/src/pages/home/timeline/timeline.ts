import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage } from 'ionic-angular';
import { Party } from '../../../interfaces/Party';
import { AppState } from '../../../store/reducers';
import { PartyProvider } from '../../../providers/party/party';
import { User } from '../../../interfaces/User';
import { UserProvider } from '../../../providers/user/user';
import { Subscription } from 'rxjs/Subscription';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage implements OnInit {

  user: User
  userSub: Subscription
  parties: Party[] = []
  friends: User[] = []

  constructor(
    public partyProvider: PartyProvider, 
    private store: Store<AppState>,
    public userProvider: UserProvider) { }

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.user = user;
    });

    this.userProvider.getUserFriends(this.user.id)
    .then((friends) => {
      const friendsPartiesMap = {};
      this.friends = friends.data
      this.friends.forEach(friend => {
        this.userProvider.getUserParties(friend.id).then((parties) => {
          const friendParties = parties.data.map(groupUser => groupUser.party)
          .reduce((friendsParties, party) => {
            if (!(party.id in friendsPartiesMap)) {
              friendsParties.push(party);
            }
            friendsPartiesMap[party.id] = true;
            return friendsParties
          }, []);
          this.parties.push(...friendParties);
      });
      })
    })

  }
}


