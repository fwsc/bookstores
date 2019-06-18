import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ShopOrderPage } from './shop-order';

@NgModule({
  declarations: [
    ShopOrderPage,
  ],
  imports: [
    IonicPageModule.forChild(ShopOrderPage),
  ],
   schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ShopOrderPageModule {}
