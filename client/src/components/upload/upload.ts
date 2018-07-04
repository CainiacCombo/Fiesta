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
  dataUri: String;


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
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }

    this.camera.getPicture(options).then((imageData) => {
      this.dataUri = `data:image/jpeg;base64,${imageData}`
    }, (err) => {
      console.log(err);
      this.presentToast(err);
    });
  }

  upload() {
    this.partyProvider.uploadToStory({
      dataUri: this.dataUri,
      userId: this.userId,
      party_id: 1
    })
    .then(() => this.navCtrl.pop())
  }

}
