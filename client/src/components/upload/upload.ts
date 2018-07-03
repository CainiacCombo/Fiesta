import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PartyProvider } from '../../providers/party/party'
import { Store } from '@ngrx/store';
import { AppState } from '../../store/reducers';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'upload',
  templateUrl: 'upload.html'
})
export class UploadComponent implements OnInit, OnDestroy {

  imageURI: any;
  imageFileName: any;
  userId: string;
  userSub: Subscription


  constructor(public navCtrl: NavController,
    public viewCtrl: ViewController,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public partyProvider: PartyProvider,
    private store: Store<AppState>,) {}

  ngOnInit() {
    this.userSub = this.store.select('user').subscribe((user) => {
      this.userId = user.id;
    });
  }

  ngOnDestroy() {
    this.userSub.unsubscribe();
  }

  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  getImage() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }

    this.camera.getPicture(options).then((imageData) => {
      // this.imageURI = imageData;
      this.partyProvider.uploadToStory({
        dataUri: imageData,
        userId: this.userId,
        // party_id: ,/
      })
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

}
