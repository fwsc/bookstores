import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ToastController} from 'ionic-angular';
import { ThemeableBrowser } from 'ionic-native';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
import { AppService, AppGlobal } from './../../app/app.service';

/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-product-details',
  templateUrl: 'product-details.html',
})
export class ProductDetailsPage extends BaseUI{
	ShopOrderPage = 'ShopOrderPage';
	selectedItem: any;
	imgs: any;
	i:number;
	constructor(public navCtrl: NavController,
		public navParams: NavParams ,
        public toastCtrl: ToastController,
        public storage: Storage,
        public appService: AppService) {
		super();
		this.selectedItem = this.navParams.get("item");
		if (this.selectedItem.SmallImages) {
			this.imgs = this.selectedItem.SmallImages;
		}
	}

	ionViewDidLoad() {
	console.log('ionViewDidLoad ProductDetailsPage');
	}
	goBuy(selectedItem){
		console.log("selectedItem____:----"+JSON.stringify(selectedItem));
	  this.storage.get('token').then((val) => {
	      if (val != null) {

			this.navCtrl.push(this.ShopOrderPage, { selectedItem: selectedItem });
	      }else {
	  		var _this_ = this;
	  		var timer=null;
	  		var i=3;
	  		timer=setInterval(function(){
	  			if(i<0){
	  				 clearInterval(timer);
	  				 timer = null;
	  				 //console.log("timer2:--"+timer);
	  				 // toast = null;
	  				_this_.navCtrl.push('LoginPage');
	  			}else{
	  				let toast=_this_.showToast(_this_.toastCtrl,"请先登录,页面将在"+i+"s后自动跳转登录页面");
	  				i--;
	  			}
	  		},1000);
	  		console.log("timer1:--"+timer);
	  			
	      }
   	 });
	}

	setGouwuche(){
		 this.storage.get('token').then((val) => {
	      if (val != null) {
	      	var params={
	      		token: val,
	      		shopid: this.selectedItem.shopid
	      	};
	      	this.appService.httpGet(AppGlobal.API.setgouwuche, params, rs => {
	      		let toast=this.showToast(this.toastCtrl,rs.statustext);

          });
	      }else {
	  		var _this_ = this;
	  		var timer=null;
	  		var i=3;
	  		timer=setInterval(function(){
	  			if(i<0){
	  				 clearInterval(timer);
	  				 timer = null;
	  				 //console.log("timer2:--"+timer);
	  				 // toast = null;
	  				_this_.navCtrl.push('LoginPage');
	  			}else{
	  				let toast=_this_.showToast(_this_.toastCtrl,"请先登录,页面将在"+i+"s后自动跳转登录页面");
	  				i--;
	  			}
	  		},1000);
	  		console.log("timer1:--"+timer);
	  			
	      }
   	 });
	}
}
