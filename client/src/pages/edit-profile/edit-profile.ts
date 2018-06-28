import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

import { pluck } from 'rxjs/operators/pluck';
import { switchMap } from 'rxjs/operators/switchMap';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/operator/take';

import { User } from '../../interfaces/User';
import { UserProvider } from '../../providers/user/user';
import { AppState } from '../../store/reducers';
import { Update } from '../../store/user/user.actions';
import { Observable } from 'rxjs/Observable';

@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  nickname: string = ''
  bio: string = ''
  user$: Observable<User>

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public view: ViewController,
    public userProvider: UserProvider,
    private store: Store<AppState>,
  ) {
    this.user$ = store.select('user');
  }

  closeModal() {
    this.view.dismiss();
  }

  updateProfile() {
    const { nickname, bio } = this;

    this.user$.pipe(
      pluck('id'),
      switchMap(id => this.userProvider.updateUser(id, { nickname, bio })),
    )
    .do(updatedUser => this.store.dispatch(new Update(updatedUser)))
    .finally(() => this.view.dismiss())
    .take(1)
    .subscribe();
  }
}
