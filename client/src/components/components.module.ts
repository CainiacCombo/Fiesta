import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';
import { PartyStoryComponent } from './party-story/party-story';
import { MediaComponent } from './media/media';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent
  ],
	imports: [
    IonicModule,
  ],
	exports: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent
  ],
  entryComponents: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
  ],
})
export class ComponentsModule {}
