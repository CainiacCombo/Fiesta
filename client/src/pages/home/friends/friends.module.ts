import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendsPage } from './friends';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FriendsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FriendsPage),
  ],
})
export class FriendsPageModule {}
