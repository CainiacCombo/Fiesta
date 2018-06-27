import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPageModule } from '../pages/login/login.module'
import { SignupPageModule } from '../pages/signup/signup.module'
import { HomePageModule } from '../pages/home/home.module'
import { FriendsPageModule } from '../pages/home/friends/friends.module'
<<<<<<< HEAD
import { EditProfilePageModule } from '../pages/edit-profile/edit-profile.module'
=======
import { UserProvider } from '../providers/user/user';
>>>>>>> db9f2136c5f6a0c09897f043de8ee9eaff7547a2

@NgModule({
  declarations: [
    MyApp,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    SignupPageModule,
    HomePageModule,
    FriendsPageModule,
    EditProfilePageModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider
  ]
})
export class AppModule {}
