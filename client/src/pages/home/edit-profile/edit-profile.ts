import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { UserProvider } from '../../../providers/user/user';


@IonicPage()
@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfilePage {

  nickname: string = '';
  bio: string = '';
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public view: ViewController, public userProvider: UserProvider) {
    this.user = navParams.get('user');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EditProfilePage');
  }

  closeModal() {
  this.view.dismiss();
 }

 updateProfile() {
   const { nickname, bio, user } = this;
   console.log(nickname, bio, user);
   this.userProvider.updateUser(user.id, {nickname, bio})
   .then(()=>this.view.dismiss())
 }
}
