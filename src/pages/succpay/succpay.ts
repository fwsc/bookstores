import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SuccpayPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-succpay',
  templateUrl: 'succpay.html',
})
export class SuccpayPage {
	paystatu:any;
	paystatutext:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {

  	this.paystatutext = this.navParams.get("paystatutext");
  	console.log("支付结果:"+this.paystatutext);
  	this.paystatu = this.navParams.get("paystatu");
  }
  goMyorder(){
  	this.navCtrl.push('MyorderPage').then(() => {
 	 	const startIndex = this.navCtrl.getActive().index - 1;
  		this.navCtrl.remove(startIndex, 1);
  		});
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SuccpayPage');
  }

}
