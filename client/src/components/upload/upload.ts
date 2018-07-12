import { Component } from '@angular/core';
import { NavParams, LoadingController, ViewController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PartyProvider } from '../../providers/party/party'
import { LoadingUiProvider } from '../../providers/loading-ui/loading-ui';

@Component({
  selector: 'upload',
  templateUrl: 'upload.html'
})
export class UploadComponent {

  imageURI: any;
  imageFileName: any;
  dataUri: String;
  cameraOptions: CameraOptions = {
    destinationType: this.camera.DestinationType.DATA_URL,
    encodingType: this.camera.EncodingType.JPEG,
    mediaType: this.camera.MediaType.PICTURE,
  }

  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public partyProvider: PartyProvider,
    public loadingUIProvider: LoadingUiProvider,
  ) { }

  upload() {
    this.loadingUIProvider.load(
      () => this.navParams.get('upload')(this.dataUri).then(() => this.viewCtrl.dismiss()),
      'Something Went Wrong When Uploading Your Image',
      {
        loadingOptions: { content: 'uploading' },
      },
    );
  }

  takePhoto() {
    this.camera.getPicture({
      ...this.cameraOptions,
      sourceType: this.camera.PictureSourceType.CAMERA,
    }).then(imageData => this.dataUri = `data:image/jpeg;base64,${imageData}`)
      .catch(() => {});
  }

  getPhoto() {
    this.camera.getPicture({
      ...this.cameraOptions,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
    }).then(imageData => this.dataUri = `data:image/jpeg;base64,${imageData}`)
      .catch(() => {});
  }

}
