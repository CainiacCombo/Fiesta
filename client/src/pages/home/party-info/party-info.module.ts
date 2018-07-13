import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyInfoPage } from './party-info';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    PartyInfoPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(PartyInfoPage),
  ],
})
export class PartyInfoPageModule {}
