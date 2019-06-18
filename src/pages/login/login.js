var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { Storage } from '@ionic/storage';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, loadingCtrl, storage, toastCtrl, appService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.storage = storage;
        _this.toastCtrl = toastCtrl;
        _this.appService = appService;
        _this.RegisterPage = 'RegisterPage';
        return _this;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    /**
    * 关闭当前页面的方法
    *
    * @memberof LoginPage
    */
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "登录中...");
        var params = {
            mobile: this.mobile,
            password: this.password
        };
        this.appService.httpGet(AppGlobal.API.login, params, function (rs) {
            console.log("USER--------rs---------:" + rs.userid);
            console.log("USERslides--------rs---------:" + rs.statustext);
            if (rs.status == 200) {
                _this.storage.set('token', rs.token);
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, rs.statustext);
                _this.dismiss();
            }
            else {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, rs.statustext);
            }
        });
    };
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
    LoginPage.prototype.pushRegisterPage = function () {
        this.navCtrl.push(this.RegisterPage);
    };
    LoginPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-login',
            templateUrl: 'login.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            LoadingController,
            Storage,
            ToastController,
            AppService])
    ], LoginPage);
    return LoginPage;
}(BaseUI));
export { LoginPage };
//# sourceMappingURL=login.js.map