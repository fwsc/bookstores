import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MyorderPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myorder',
  templateUrl: 'myorder.html',
})
export class MyorderPage {
  myorder: any;
  constructor(public navCtrl: NavController,
   public navParams: NavParams,
   public appService: AppService,
   public storage: Storage) {
   	this.getmyOrder();
  }
  
  ionViewDidLoad() {
    console.log('ionViewDidLoad MyorderPage');
  }

  getmyOrder(){
  	this.storage.get('token').then((val) => {
          var params ={
                 token: val,
             };
          this.appService.httpGet(AppGlobal.API.getmyorder, params, rs => {
             this.myorder=rs;
          });
    
    });
  }
}
