import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SidebarPage } from './sidebar';

@NgModule({
  declarations: [
    SidebarPage,
  ],
  imports: [
    IonicPageModule.forChild(SidebarPage),
  ],
  exports: [
    SidebarPage,
  ],
  entryComponents: [
    SidebarPage,
  ],
})
export class SidebarPageModule {}
