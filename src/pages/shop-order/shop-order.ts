import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the ShopOrderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop-order',
  templateUrl: 'shop-order.html',
})
export class ShopOrderPage {
  shopnum:number;
  selectedItem: any;
  Address : Array<any> = [];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public appService: AppService,
    public storage: Storage) {
    
  	this.selectedItem = this.navParams.get("selectedItem");
  	this.shopnum=1;
    this.getaddress();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopOrderPage');

  }
  getaddress(){
    var token=null;
    this.storage.get('token').then((val) => {
         var params ={
                 token: val
             };
          this.appService.httpGet(AppGlobal.API.getaddress, params, rs => {
          this.Address=rs;
          });
    
    })
  }
  pay(){
     this.storage.get('token').then((val) => {
         console.log("myshopnum-----:"+this.shopnum);
          var params ={
                 token: val,
                 shopid: this.selectedItem.shopid,
                 shopnum: this.shopnum
             };
          this.appService.httpGet(AppGlobal.API.addorder, params, rs => {
            console.log("支付结果:----"+ rs.statustext);
            var paystatutext=  rs.statustext;
            var paystatu= rs.statu;
            this.navCtrl.push('SuccpayPage',{
              paystatutext: paystatutext,
              paystatu: paystatu}
              ); 
          });
    
    })
   
  }
  addshop(){
  	//console.log("shopnum-------"+this.selectedItem.price);
  	this.shopnum++;
  }
  reduceshop(){
  	//console.log("shopnum-------"+this.shopnum);
  	if(this.shopnum>1){
  		this.shopnum--;
  	}
  }
}
