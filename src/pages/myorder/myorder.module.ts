import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MyorderPage } from './myorder';

@NgModule({
  declarations: [
    MyorderPage,
  ],
  imports: [
    IonicPageModule.forChild(MyorderPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MyorderPageModule {}
