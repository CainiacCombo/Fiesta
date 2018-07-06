import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import { Party } from '../../../interfaces/Party';
import { AppState } from '../../../store/reducers';
import { PartyProvider } from '../../../providers/party/party';

@IonicPage()
@Component({
  selector: 'page-timeline',
  templateUrl: 'timeline.html',
})
export class TimelinePage implements OnInit {

  parties$: Observable<Party[]>

  constructor(public partyProvider: PartyProvider, private store: Store<AppState>) { }

  ngOnInit() {
    this.parties$ = this.store.select('parties');
  }

}
