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
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { Storage } from '@ionic/storage';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the AboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutPage = /** @class */ (function (_super) {
    __extends(AboutPage, _super);
    function AboutPage(navCtrl, navParams, loadCtrl, modalCtrl, storage, appService) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadCtrl = loadCtrl;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.appService = appService;
        _this.LoginPage = 'LoginPage';
        _this.notLogin = true;
        _this.logined = false;
        return _this;
    }
    AboutPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutPage');
        this.getUser();
    };
    AboutPage.prototype.showModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(this.LoginPage);
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.getUser();
            ;
        });
        modal.present();
    };
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
    AboutPage.prototype.getUser = function () {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                var params = { token: val };
                _this.appService.httpGet(AppGlobal.API.getUser, params, function (rs) {
                    _this.username = rs.username;
                    _this.mysgin = rs.mysgin;
                    _this.headface = rs.headface + "?" + (new Date()).valueOf();
                    _this.notLogin = false;
                    _this.logined = true;
                    loading.dismiss();
                    console.log("USER--------rs---------:" + rs.userid);
                    console.log("USERslides--------rs---------:" + rs.data);
                });
            }
            else {
                _this.notLogin = true;
                _this.logined = false;
            }
        });
    };
    AboutPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-about',
            templateUrl: 'about.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            ModalController,
            Storage,
            AppService])
    ], AboutPage);
    return AboutPage;
}(BaseUI));
export { AboutPage };
//# sourceMappingURL=about.js.map