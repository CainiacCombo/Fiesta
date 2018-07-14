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
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { DeviceMotion } from '@ionic-native/device-motion';

import { MyApp } from './app.component';
import { ComponentsModule } from '../components/components.module';

import { LoginPageModule } from '../pages/login/login.module';
import { SignupPageModule } from '../pages/signup/signup.module';
import { HomePageModule } from '../pages/home/home.module';

import { UserProvider } from '../providers/user/user';
import { PartyProvider } from '../providers/party/party';
import { LoadingUiProvider } from '../providers/loading-ui/loading-ui';

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
    FileTransfer,
    Camera,
    GooglePlus,
    BarcodeScanner,
    DeviceMotion,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserProvider,
    PartyProvider,
    LoadingUiProvider,
  ]
})
export class AppModule {}
