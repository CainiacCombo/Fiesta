import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';
import { PartyStoryComponent } from './party-story/party-story';
import { MediaComponent } from './media/media';
import { PartySidebarComponent } from './party-sidebar/party-sidebar';
import { CreateGameComponent } from './create-game/create-game';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    PartySidebarComponent,
    CreateGameComponent
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
    PartySidebarComponent,
    CreateGameComponent
  ],
  entryComponents: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    PartySidebarComponent,
    CreateGameComponent,
  ],
})
export class ComponentsModule {}
