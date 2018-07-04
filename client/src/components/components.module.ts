import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
    UploadComponent
  ],
	imports: [
    IonicModule,
  ],
	exports: [
    RatingComponent,
    RateComponent,
    UploadComponent
  ],
  entryComponents: [
    RateComponent,
    UploadComponent
  ]
})
export class ComponentsModule {}
