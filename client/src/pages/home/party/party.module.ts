import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyPage } from './party';
import { ComponentsModule } from '../../../components/components.module'

@NgModule({
  declarations: [
    PartyPage,
  ],
  imports: [
    IonicPageModule.forChild(PartyPage),
    ComponentsModule,
  ],
})
export class PartyPageModule {}
