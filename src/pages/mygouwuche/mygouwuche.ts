import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MygouwuchePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mygouwuche',
  templateUrl: 'mygouwuche.html',
})
export class MygouwuchePage {
  private mygouwuche: any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public appService: AppService,
   public storage: Storage) {
   	this.getGouwuche();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MygouwuchePage');
  }
  getGouwuche(){
  	this.storage.get('token').then((val) => {
          var params ={
                 token: val,
             };
          this.appService.httpGet(AppGlobal.API.getgouwuche, params, rs => {
          	//console.log("book---:"+JSON.stringify(rs[0].book) );
             this.mygouwuche=rs;
          });
    
    });
  }
  goBuy(selectedItem){
  	console.log("book222---:"+JSON.stringify(selectedItem) );
	this.navCtrl.push('ShopOrderPage',{selectedItem:selectedItem}); 
  }

}
