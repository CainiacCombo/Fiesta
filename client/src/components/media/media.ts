import { Component } from '@angular/core';
import { NavParams, ViewController } from 'ionic-angular';
import { Media } from '../../interfaces/Media';

@Component({
  selector: 'media',
  templateUrl: 'media.html'
})
export class MediaComponent {

  startingIndex: number
  media: Media[]

  constructor(public navParams: NavParams, public viewCtrl: ViewController) { }

  ngOnInit() {
    this.startingIndex = this.navParams.get('startingIndex');
    this.media = this.navParams.get('media');
  }
}
