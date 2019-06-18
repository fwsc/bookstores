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
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { BaseUI } from '../../common/baseui';
/**
 * Generated class for the ProductDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailsPage = /** @class */ (function (_super) {
    __extends(ProductDetailsPage, _super);
    function ProductDetailsPage(navCtrl, navParams, loadCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.loadCtrl = loadCtrl;
        _this.storage = storage;
        _this.ShopOrderPage = 'ShopOrderPage';
        _this.selectedItem = _this.navParams.get("item");
        if (_this.selectedItem.SmallImages) {
            _this.imgs = _this.selectedItem.SmallImages;
        }
        return _this;
    }
    ProductDetailsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductDetailsPage');
    };
    // goBuy() {
    //     let options = {
    //         statusbar: {
    //             color: '#f8285c'
    //         },
    //         toolbar: {
    //             height: 44,
    //             color: '#f8285c'
    //         },
    //         title: {
    //             color: '#ffffffff',
    //             showPageTitle: true
    //         },
    //         backButton: {
    //             image: 'back',
    //             imagePressed: 'back_pressed',
    //             align: 'left',
    //             event: 'backPressed'
    //         },
    //         backButtonCanClose: true
    //     };
    //     new ThemeableBrowser(this.selectedItem.ClickUrl, '_blank', options)
    // }
    ProductDetailsPage.prototype.goBuy = function (selectedItem) {
        var _this = this;
        this.storage.get('token').then(function (val) {
            if (val != null) {
                console.log("selectedItem---y----" + _this.selectedItem);
                _this.navCtrl.push(_this.ShopOrderPage, { selectedItem: selectedItem });
            }
            else {
                var loading = _this.showLoading(_this.loadCtrl, "请先登录,3s后自动跳转");
                _this.navCtrl.push('RegisterPage');
            }
        });
    };
    ProductDetailsPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-product-details',
            templateUrl: 'product-details.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            LoadingController,
            Storage])
    ], ProductDetailsPage);
    return ProductDetailsPage;
}(BaseUI));
export { ProductDetailsPage };
//# sourceMappingURL=product-details.js.map