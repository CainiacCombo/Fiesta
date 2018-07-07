import { Component } from '@angular/core';
import { NavParams, LoadingController, ViewController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { PartyProvider } from '../../providers/party/party'

@Component({
  selector: 'upload',
  templateUrl: 'upload.html'
})
export class UploadComponent {

  imageURI: any;
  imageFileName: any;
  dataUri: String;


  constructor(
    public navParams: NavParams,
    public viewCtrl: ViewController,
    private camera: Camera,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public partyProvider: PartyProvider,) {}


  async upload() {
    const loading = this.loadingCtrl.create({
      content: 'uploading'
    });
    try {
      loading.present();
      await this.navParams.get('upload')(this.dataUri)
      this.viewCtrl.dismiss();
    } catch (e) {
      this.toastCtrl.create({
        message: 'Something Went Wrong When Uploading Your Image',
        duration: 3000,
        position: 'bottom'
      }).present();
    } finally{
      loading.dismiss();
    }
  }


  async getImage() {

    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
    }
    const imageData = await this.camera.getPicture(options)
    this.dataUri = `data:image/jpeg;base64,${imageData}`

  }

}
