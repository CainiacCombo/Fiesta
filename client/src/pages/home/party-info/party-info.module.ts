import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyInfoPage } from './party-info';

@NgModule({
  declarations: [
    PartyInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyInfoPage),
  ],
})
export class PartyInfoPageModule {}
