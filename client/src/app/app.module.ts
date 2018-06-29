import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { HomePageModule } from '../pages/home/home.module';
import { FriendsPageModule } from '../pages/home/friends/friends.module';
import { EditProfilePageModule } from '../pages/home/edit-profile/edit-profile.module';
import { UserProvider } from '../providers/user/user';
import { PartyProvider } from '../providers/party/party';
import { InvitePageModule } from '../pages/home/invite/invite.module'

import { reducers } from '../store/reducers';

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LoginPageModule,
    SignupPageModule,
    HomePageModule,
    FriendsPageModule,
    EditProfilePageModule,
    InvitePageModule ,
    IonicModule.forRoot(MyApp),
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    PartyProvider
  ]
})
export class AppModule {}
