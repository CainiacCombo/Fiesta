import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendRequestsPage } from './friend-requests';
import { ComponentsModule } from '../../../components/components.module';

@NgModule({
  declarations: [
    FriendRequestsPage,
  ],
  imports: [
    ComponentsModule,
    IonicPageModule.forChild(FriendRequestsPage),
  ],
})
export class FriendRequestsPageModule {}
