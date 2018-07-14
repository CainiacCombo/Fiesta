import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';

import { PartyPageModule } from './party/party.module';
import { FriendsPageModule } from './friends/friends.module';
import { EditProfilePageModule } from './edit-profile/edit-profile.module';
import { InvitePageModule } from './invite/invite.module'
import { PartyInfoPageModule } from './party-info/party-info.module'
import { PartyGamePageModule } from './party-game/party-game.module';
import { FriendRequestsPageModule } from './friend-requests/friend-requests.module';
import { SidebarPageModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    FriendsPageModule,
    EditProfilePageModule,
    InvitePageModule,
    PartyPageModule,
    PartyInfoPageModule,
    PartyGamePageModule,
    FriendRequestsPageModule,
    SidebarPageModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
