import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyGamePage } from './party-game';
import { NgxQRCodeModule } from 'ngx-qrcode2';

@NgModule({
  declarations: [
    PartyGamePage,
  ],
  imports: [
    NgxQRCodeModule,
    IonicPageModule.forChild(PartyGamePage),
  ],
})
export class PartyGamePageModule {}
