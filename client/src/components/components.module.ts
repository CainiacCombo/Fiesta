import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';
import { PartyStoryComponent } from './party-story/party-story';
import { MediaComponent } from './media/media';
import { ProfileComponent } from './profile/profile';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    ProfileComponent
  ],
	imports: [
    IonicModule,
  ],
	exports: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    ProfileComponent
  ],
  entryComponents: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    ProfileComponent,
  ],
})
export class ComponentsModule {}
