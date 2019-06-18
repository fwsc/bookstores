var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
/**
 * Generated class for the IonProductsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var IonProductsComponent = /** @class */ (function () {
    function IonProductsComponent(navCtrl) {
        this.navCtrl = navCtrl;
        console.log('Hello IonProductsComponent Component');
    }
    IonProductsComponent.prototype.goDetails = function (item) {
        this.navCtrl.push('ProductDetailsPage', { item: item });
    };
    __decorate([
        Input(),
        __metadata("design:type", Array)
    ], IonProductsComponent.prototype, "products", void 0);
    IonProductsComponent = __decorate([
        Component({
            selector: 'ion-products',
            templateUrl: 'ion-products.html'
        }),
        __metadata("design:paramtypes", [NavController])
    ], IonProductsComponent);
    return IonProductsComponent;
}());
export { IonProductsComponent };
//# sourceMappingURL=ion-products.js.map