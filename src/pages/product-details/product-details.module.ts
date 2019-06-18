import { NgModule , CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
//import { IonicModule } from 'ionic-angular';
import { IonicPageModule } from 'ionic-angular';
import { ProductDetailsPage } from './product-details';

@NgModule({
  declarations: [
    ProductDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(ProductDetailsPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductDetailsPageModule {}
