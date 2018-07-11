import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FriendRequestsPage } from './friend-requests';

@NgModule({
  declarations: [
    FriendRequestsPage,
  ],
  imports: [
    IonicPageModule.forChild(FriendRequestsPage),
  ],
})
export class FriendRequestsPageModule {}
