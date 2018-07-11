import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';
import { PartyStoryComponent } from './party-story/party-story';
import { MediaComponent } from './media/media';
import { ProfileComponent } from './profile/profile';
import { PartySidebarComponent } from './party-sidebar/party-sidebar';
import { CreateGameComponent } from './create-game/create-game';
import { UserCardComponent } from './user-card/user-card';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    ProfileComponent,
    PartySidebarComponent,
    CreateGameComponent,
    UserCardComponent,
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
    ProfileComponent,
    PartySidebarComponent,
    CreateGameComponent,
    UserCardComponent,
  ],
  entryComponents: [
    RatingComponent,
    RateComponent,
    UploadComponent,
    PartyStoryComponent,
    MediaComponent,
    ProfileComponent,
    PartySidebarComponent,
    CreateGameComponent,
    UserCardComponent,
  ],
})
export class ComponentsModule {}
