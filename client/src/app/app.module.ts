import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Contacts } from '@ionic-native/contacts';
import { GooglePlus } from '@ionic-native/google-plus';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer } from '@ionic-native/file-transfer';
import { Camera } from '@ionic-native/camera';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';

import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { HomePageModule } from '../pages/home/home.module';
import { PartyPageModule } from '../pages/home/party/party.module';
import { FriendsPageModule } from '../pages/home/friends/friends.module';
import { EditProfilePageModule } from '../pages/home/edit-profile/edit-profile.module';
import { InvitePageModule } from '../pages/home/invite/invite.module'
import { PartyInfoPageModule } from '../pages/home/party-info/party-info.module'
import { PartyGamePageModule } from '../pages/home/party-game/party-game.module';

import { UserProvider } from '../providers/user/user';
import { PartyProvider } from '../providers/party/party';

import { reducers } from '../store/reducers';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ComponentsModule,
    LoginPageModule,
    SignupPageModule,
    HomePageModule,
    FriendsPageModule,
    EditProfilePageModule,
    InvitePageModule,
    PartyPageModule,
    PartyInfoPageModule,
    PartyGamePageModule,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    Contacts,
    GooglePlus,
    SplashScreen,
    StatusBar,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    PartyProvider,
    FileTransfer,
    Camera,
    GooglePlus,
  ]
})
export class AppModule {}
