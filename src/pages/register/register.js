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
import { IonicPage, NavController, NavParams, ToastController, ViewController, LoadingController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = /** @class */ (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, viewCtrl, toastCtrl, loadingCtrl, appService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.toastCtrl = toastCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.appService = appService;
        return _this;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.confirmPassword) {
            _super.prototype.showToast.call(this, this.toastCtrl, "两次输入的密码不匹配。");
        }
        else {
            var params = {
                mobile: this.mobile,
                password: this.password,
                username: this.username,
            };
            var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, "注册中...");
            this.appService.httpGet(AppGlobal.API.register, params, function (rs) {
                console.log("USER--------rs---------:" + rs.userid);
                console.log("USERslides--------rs---------:" + rs.statustext);
                if (rs.status == 200) {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, "注册成功。");
                    _this.dismiss();
                }
                else {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, rs.statustext);
                }
            });
        }
    };
    RegisterPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-register',
            templateUrl: 'register.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            ViewController,
            ToastController,
            LoadingController,
            AppService])
    ], RegisterPage);
    return RegisterPage;
}(BaseUI));
export { RegisterPage };
//# sourceMappingURL=register.js.map