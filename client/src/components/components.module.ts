import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';
import { RateComponent } from './rate/rate';

@NgModule({
	declarations: [
    RatingComponent,
    RateComponent,
  ],
	imports: [
    IonicModule,
  ],
	exports: [
    RatingComponent,
    RateComponent,
  ],
  entryComponents: [
    RateComponent,
  ]
})
export class ComponentsModule {}
