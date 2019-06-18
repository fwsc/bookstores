var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppGlobal, AppService } from './../../app/app.service';
/**
 * Generated class for the ContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ContactPage = /** @class */ (function () {
    function ContactPage(navCtrl, navParams, appService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appService = appService;
        this.categories = [];
        this.products = [];
        this.hasmore = true;
        this.islock = false;
        this.params = {
            favoritesId: 0,
            pageNo: 1
        };
    }
    ContactPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ContactPage');
        this.getCategories();
        this.addScrollEventListener();
    };
    ContactPage.prototype.addScrollEventListener = function () {
        var _this = this;
        this.scrollElement._scrollContent.nativeElement.onscroll = function (event) {
            if (_this.spinnerElement) {
                //元素顶端到可见区域顶端的距离
                var top = _this.spinnerElement.nativeElement.getBoundingClientRect().top;
                //可见区域高度
                var clientHeight = document.documentElement.clientHeight;
                if (top <= clientHeight) {
                    console.log("ready loadmore...");
                    _this.doInfinite();
                }
            }
        };
    };
    // 获取左侧菜单
    ContactPage.prototype.getCategories = function () {
        var _this = this;
        this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, function (rs) {
            console.debug(rs);
            _this.categories = rs.data;
            //默认获取第一个分类的商品列表
            _this.params.favoritesId = _this.categories[0].FavoritesId;
            _this.getProducts();
        });
    };
    // 选中左侧菜单
    ContactPage.prototype.itemClick = function (c, event) {
        var initSelected = document.getElementsByClassName('menuItem');
        if (initSelected[0].classList.contains("active")) {
            initSelected[0].classList.remove("active");
        }
        //移除上次选中菜单的样式
        if (this.selectedMenuTarget) {
            this.selectedMenuTarget.classList.remove("active");
        }
        //修改本次选中菜单的样式
        event.currentTarget.classList.add("active");
        //将本次选中的菜单记录
        this.selectedMenuTarget = event.currentTarget;
        this.hasmore = true;
        this.params.favoritesId = c.FavoritesId;
        this.params.pageNo = 1;
        this.getProducts();
    };
    ContactPage.prototype.getProducts = function () {
        var _this = this;
        this.appService.httpGet(AppGlobal.API.getProducts, this.params, function (rs) {
            _this.products = rs.data;
            _this.params.pageNo += 1;
        });
    };
    ContactPage.prototype.doInfinite = function () {
        var _this = this;
        if (this.islock) {
            return;
        }
        if (this.hasmore == false) {
            return;
        }
        this.islock = true;
        this.appService.httpGet(AppGlobal.API.getProducts, this.params, function (d) {
            _this.islock = false;
            if (d.data.length > 0) {
                _this.products = _this.products.concat(d.data);
                _this.params.pageNo += 1;
            }
            else {
                _this.hasmore = false;
                console.log("没有数据啦！");
            }
        });
    };
    ContactPage.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductDetailsPage', { item: item });
    };
    __decorate([
        ViewChild('scroll'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "scrollElement", void 0);
    __decorate([
        ViewChild('spinner'),
        __metadata("design:type", Object)
    ], ContactPage.prototype, "spinnerElement", void 0);
    ContactPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-contact',
            templateUrl: 'contact.html',
        }),
        __metadata("design:paramtypes", [NavController, NavParams, AppService])
    ], ContactPage);
    return ContactPage;
}());
export { ContactPage };
//# sourceMappingURL=contact.js.map