import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams ,ModalController, LoadingController,ToastController} from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { Storage } from '@ionic/storage';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-about',
  templateUrl: 'about.html',
})
export class AboutPage extends BaseUI {
  private LoginPage='LoginPage';
  private MyorderPage='MyorderPage';
  private MygouwuchePage='MygouwuchePage';
  private MyaddressPage= 'MyaddressPage';
  public notLogin: boolean = true;
  public logined: boolean = false;
  headface: string;
  username: string;
  mysgin  : string;
  constructor(  public navCtrl: NavController,
				public navParams: NavParams ,
        public loadCtrl: LoadingController,
				public modalCtrl: ModalController,
        public storage: Storage,
        public appService: AppService,
        public toastCtrl: ToastController,) {
        super();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad AboutPage');
    this.getUser();
  }
  showModal(){
  	let modal = this.modalCtrl.create(this.LoginPage);
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.getUser();;
    });
    modal.present();
  }
  showMyOrder() {
    this.storage.get('token').then((val) => {
        if (val != null) {
             this.navCtrl.push(this.MyorderPage);
        }else {
            let toast=this.showToast(this.toastCtrl,"请先登录");
        }
    });
  }
  // loadUserPage (){
  // 	 this.storage.get('token').then((val) => {
  //     if (val != null) {
  //       //加载用户数据
  //       var loading = super.showLoading(this.loadCtrl, "加载中...");
  //       this.rest.getUserInfo(val)
  //         .subscribe(
  //         userinfo => {
  //           this.username = userinfo["username"];
  //           this.mysgin  = userinfo["mysgin"];
  //           this.headface = userinfo["headface"] + "?" + (new Date()).valueOf();
  //           this.notLogin = false;
  //           this.logined = true;
  //           loading.dismiss();
  //         }
  //         );
  //     }
  //     else {
  //       this.notLogin = true;
  //       this.logined = false;
  //     }
  //   });
 // }

  getUser(){
   
    this.storage.get('token').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadCtrl, "加载中...");
        var params = { token: val };
        this.appService.httpGet(AppGlobal.API.getUser, params, rs => {
        this.username = rs.username;
        this.mysgin  = rs.mysgin;
        this.headface = rs.headface + "?" + (new Date()).valueOf();
        this.notLogin = false;
        this.logined = true;
        loading.dismiss();
          console.log("USER--------rs---------:"+rs.userid);
          console.log("USERslides--------rs---------:"+rs.data);
        })
      }else {
       this.notLogin = true;
       this.logined = false;
      }
    });
  }
  showGouwuche(){
    this.storage.get('token').then((val) => {
        if (val != null) {
            this.navCtrl.push(this.MygouwuchePage);
        }else {
            let toast=this.showToast(this.toastCtrl,"请先登录");
        }
    });
  }
   showMyAddress(){
    this.storage.get('token').then((val) => {
        if (val != null) {
            this.navCtrl.push(this.MyaddressPage);
        }else {
            let toast=this.showToast(this.toastCtrl,"请先登录");
        }
    });
  }
  exitlgoin(){
    this.storage.clear();
     this.notLogin = true;
      this.logined = false;
  }
}
