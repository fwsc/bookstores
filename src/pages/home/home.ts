import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AppService, AppGlobal } from './../../app/app.service';
/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
	slides: Array<any> = [];
	categories: Array<any> = [];
	products: Array<any> = [];

	spinner1: boolean = true;

	params = {
		favoritesId: 2054400,
		pageNo: 2,
		pageSize: 40
	}
	constructor(public appService: AppService, public navCtrl: NavController, public navParams: NavParams) {
		//this.getUser();
		this.getBooks(0,100,0);
		this.getSlides(0,100,1);
		//this.getCategories();
		//this.getProducts();
	}

	getBooks(sid,num,status){
		var params = {
			sid: sid,
			num: num,
			status: status
		};
		this.appService.httpGet(AppGlobal.API.getBooks , params, rs => {
			this.products = rs.list;
			console.log("Booksslides--------rs[0]---------:"+rs);
			this.spinner1 = false;
		})
	}
	getUser(){
		var params = {
			token: 1
		}
		this.appService.httpGet(AppGlobal.API.getUser, params, rs => {
			console.log("USER--------rs---------:"+rs.userid);
			//this.slides = rs.data;
			console.log("USERslides--------rs---------:"+rs.data);
			this.spinner1 = false;
		})
	}
	//获取幻灯片
	getSlides(sid,num,status){
		var params = {
			sid: sid,
			num: num,
			status: status
		};
		this.appService.httpGet(AppGlobal.API.getBooks , params, rs => {
			this.slides = rs.list;
			this.spinner1 = false;
		})
	}
	//获取分类
	getCategories(){
		this.appService.httpGet(AppGlobal.API.getCategories, { appTag: 'dress' }, rs => {
			//console.log("分类rs:"+rs);
			this.categories = rs.data;
    	})
	}
	//获取首页推荐列表
	getProducts(){
		this.appService.httpGet(AppGlobal.API.getProducts, this.params, rs => {
			//console.log("推荐rs:"+rs);
			this.products = rs.data;
		})
	}
	//商品详情
	goDetails(item) {
		console.debug('go details...')
	}
	goProductList(item) {
		this.navCtrl.push('ProductListPage', { item: item });
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}
	
}
