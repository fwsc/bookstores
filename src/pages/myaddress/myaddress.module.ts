import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyaddressPage } from './myaddress';

@NgModule({
  declarations: [
    MyaddressPage,
  ],
  imports: [
    IonicPageModule.forChild(MyaddressPage),
  ],
})
export class MyaddressPageModule {}
