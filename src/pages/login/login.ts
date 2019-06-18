import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController} from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { Storage } from '@ionic/storage';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage extends BaseUI{
  RegisterPage = 'RegisterPage';
  mobile: any;
  password: any;
  errorMessage: any;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public loadingCtrl: LoadingController,
    public storage: Storage,
    public toastCtrl: ToastController,
    public appService: AppService) {
    super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   /**
   * 关闭当前页面的方法
   * 
   * @memberof LoginPage
   */
  dismiss() {
    this.viewCtrl.dismiss();
   
  }

  login(){
    var loading = super.showLoading(this.loadingCtrl, "登录中...");
      var params = {
        mobile: this.mobile,
        password: this.password
      }
    this.appService.httpGet(AppGlobal.API.login, params, rs => {
      console.log("USER--------rs---------:"+rs.userid);
      console.log("USERslides--------rs---------:"+rs.statustext);
      if(rs.status==200){
        this.storage.set('token', rs.token);
         loading.dismiss();
         super.showToast(this.toastCtrl, rs.statustext);
         this.dismiss();
      }else{
         loading.dismiss();
         super.showToast(this.toastCtrl, rs.statustext);
      }
     
    })
  }

 
  // login(){
  //   var loading = super.showLoading(this.loadingCtrl, "登录中...");
  //   this.rest.login(this.mobile, this.password)
  //     .subscribe(
  //     f => {
  //       console.log("f-----");
  //       if (f["status"] == 1) {
  //         //处理登录成功的页面跳转
  //         //你也可以存储接口返回的 token
  //         this.storage.set('token', f["token"]);
  //         loading.dismiss();
  //         this.dismiss();
  //       }
  //       else {
  //         loading.dismiss();
  //         super.showToast(this.toastCtrl, f["statustext"]);
  //       }
  //     },
  //     error => this.errorMessage = <any>error);
  //   }
    pushRegisterPage() {
    this.navCtrl.push(this.RegisterPage);
  }
}
