import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MygouwuchePage } from './mygouwuche';

@NgModule({
  declarations: [
    MygouwuchePage,
  ],
  imports: [
    IonicPageModule.forChild(MygouwuchePage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class MygouwuchePageModule {}
