import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
import { Storage } from '@ionic/storage';
/**
 * Generated class for the MyaddressPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-myaddress',
  templateUrl: 'myaddress.html',
})
export class MyaddressPage {
  alladdress: any;
  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public appService: AppService,
    public storage: Storage) {
  	this.getAllAddress();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MyaddressPage');
  }
  getAllAddress(){
  	this.storage.get('token').then((val) => {
          var params ={
                 token: val,
             };
          this.appService.httpGet(AppGlobal.API.getalladdress, params, rs => {
             this.alladdress=rs;
          });
    
    });
  }
}
