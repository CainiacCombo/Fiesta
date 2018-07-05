import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';
import { PartyStoryComponent } from './party-story/party-story';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent
  ],
	imports: [
    IonicModule,
  ],
	exports: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent
  ],
  entryComponents: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
  ],
})
export class ComponentsModule {}
