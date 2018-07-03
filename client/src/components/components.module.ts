import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { UploadComponent } from './upload/upload';
import { RatingComponent } from './rating/rating';

@NgModule({
	declarations: [UploadComponent, RatingComponent],
	imports: [IonicModule,],
	exports: [UploadComponent, RatingComponent],
	entryComponents: [UploadComponent],
})
export class ComponentsModule {}
