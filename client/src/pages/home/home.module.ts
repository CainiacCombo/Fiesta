import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { SidebarPageModule } from './sidebar/sidebar.module';

@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    SidebarPageModule,
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}
