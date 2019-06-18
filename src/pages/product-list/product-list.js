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
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the ProductListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductListPage = /** @class */ (function () {
    function ProductListPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.hasmore = true;
        this.spinner1 = true;
        this.params = {
            pageNo: 1,
            favoritesId: 0,
        };
        this.selectedItem = this.navParams.get("item");
        this.params.favoritesId = this.selectedItem.FavoritesId;
    }
    ProductListPage.prototype.ionViewDidLoad = function () {
        this.getFavoritesItems();
        console.log('ionViewDidLoad ProductListPage');
    };
    ProductListPage.prototype.getFavoritesItems = function () {
        var _this = this;
        this.appService.httpGet(AppGlobal.API.getProducts, this.params, function (d) {
            _this.products = d.data;
            _this.params.pageNo += 1;
            _this.spinner1 = false;
        });
    };
    ProductListPage.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        if (this.hasmore == false) {
            infiniteScroll.complete();
            return;
        }
        this.appService.httpGet(AppGlobal.API.getProducts, this.params, function (d) {
            if (d.data.length > 0) {
                _this.products = _this.products.concat(d.data);
                _this.params.pageNo += 1;
            }
            else {
                _this.hasmore = false;
                console.log("没有数据啦！");
            }
            infiniteScroll.complete();
        });
    };
    ProductListPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-product-list',
            templateUrl: 'product-list.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AppService])
    ], ProductListPage);
    return ProductListPage;
}());
export { ProductListPage };
//# sourceMappingURL=product-list.js.map