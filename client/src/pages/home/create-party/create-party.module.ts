import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreatePartyPage } from './create-party';

@NgModule({
  declarations: [
    CreatePartyPage,
  ],
  imports: [
    IonicPageModule.forChild(CreatePartyPage),
  ],
})
export class CreatePartyPageModule {}
