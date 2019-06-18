import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,LoadingController, ToastController } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
import { BaseUI } from '../../common/baseui';
/**
 * Generated class for the SearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-search',
  templateUrl: 'search.html',
})
export class SearchPage extends BaseUI{
	shopname:any;
	products: Array<any> = [];
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
  	public appService: AppService) {
  	super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SearchPage');
  }
  serach(){
    var loading = super.showLoading(this.loadingCtrl, "搜索中...");
      var params = {
        shopname: this.shopname
      }
    this.appService.httpGet(AppGlobal.API.search, params, rs => {
     	this.products = rs;
         loading.dismiss();
     
    })
  }
   goDetails(item) {
    this.navCtrl.push('ProductDetailsPage', { item: item });
  }
}
