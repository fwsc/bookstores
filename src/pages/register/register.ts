import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController,
    public toastCtrl: ToastController,
    public loadingCtrl: LoadingController,
    public appService: AppService) {
  	super();
  }
  mobile: any;
  username: any;
  password: any;
  confirmPassword: any;
  errorMessage: any;
  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }
  dismiss() {
    this.viewCtrl.dismiss();
  }
  gotoLogin() {
    this.navCtrl.pop();
  }
  doRegister() {
    if (this.password != this.confirmPassword) {
      super.showToast(this.toastCtrl, "两次输入的密码不匹配。");
    }else{
     var params = {
       mobile: this.mobile,
       password: this.password,
       username: this.username,
     }
     var loading = super.showLoading(this.loadingCtrl, "注册中...");
     this.appService.httpGet(AppGlobal.API.register, params, rs => {
      console.log("USER--------rs---------:"+rs.userid);
      console.log("USERslides--------rs---------:"+rs.statustext);
      if(rs.status==200){
         loading.dismiss();
         super.showToast(this.toastCtrl,"注册成功。");
         this.dismiss();
      }else{
         loading.dismiss();
         super.showToast(this.toastCtrl, rs.statustext);
      }
    })
    }
  }
  //  doRegister() {
  //   if (this.password != this.confirmPassword) {
  //     super.showToast(this.toastCtrl, "两次输入的密码不匹配。");
  //   }
  //   else {
  //     var loading = super.showLoading(this.loadingCtrl, "注册中...");
  //     this.rest.register(this.mobile,this.username,this.password)
  //     .subscribe(
  //       f=>{
  //         if(f["status"]==1){
  //           loading.dismiss();
  //           super.showToast(this.toastCtrl,"注册成功。");
  //           this.dismiss();
  //         }
  //         else{
  //           loading.dismiss();
  //           super.showToast(this.toastCtrl,f["statustext"]);
  //         }
  //       },
  //       error => this.errorMessage = <any>error);
  //   }
  // }
}
