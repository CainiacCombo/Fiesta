import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { App, NavParams, NavController, ViewController, ModalController } from 'ionic-angular';
import { User } from '../../interfaces/User';
import { Party } from '../../interfaces/Party';
import { UserProvider } from '../../providers/user/user';
import { AppState } from '../../store/reducers';
import { Logout } from '../../store/user/user.actions';
import { LoginPage } from '../../pages/login/login';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfileComponent implements OnInit {

  @Input('user') inUser: User
  @Input('isUserProfile') isUserProfile: boolean
  user: User
  friends: User[] = []
  parties: Party[] = []
  partiesHosted: Party[] = []

  constructor(
    public app: App,
    public modalCtrl: ModalController,
    public navCtrl: NavController,
    public view: ViewController,
    public navParams: NavParams,
    public userProvider: UserProvider,
    private store: Store<AppState>,
  ) { }

  ngOnInit() {
    this.user = this.inUser || this.navParams.get('user');

    this.userProvider.getUserFriends(this.user.id)
      .then(friends => {
        console.log(this.user.id, JSON.stringify(friends.data));
        this.friends = friends.data
      });

    this.userProvider.getUserParties(this.user.id)
      .then((parties) => {
        this.parties = parties.data.map(groupUser => groupUser.party);
        this.partiesHosted = parties.data
          .filter(groupUser => groupUser.is_host === true)
          .map(groupUser => groupUser.party);
      });
  }

  closeModal() {
    this.view.dismiss();
  }

  goToFriendsList() {
    this.navCtrl.push('FriendsPage', { friends: this.friends });
  }

  goToEditProfile() {
    this.modalCtrl.create('EditProfilePage').present();
  }

  signout() {
    this.userProvider.googleSignout()
      .then(() => this.app.getRootNav().setRoot(LoginPage, null, { animate: true, direction: 'left' }))
      .then(() => this.store.dispatch(new Logout()))
  }

}
