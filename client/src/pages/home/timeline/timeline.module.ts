import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TimelinePage } from './timeline';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    TimelinePage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(TimelinePage),
  ],
})
export class TimelinePageModule {}
