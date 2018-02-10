

import { Http, Response, Headers } from '@angular/http';

import { Injectable } from '@angular/core';
import 'rxjs/Rx';


import { Observable } from 'rxjs/Observable';
// import { error } from 'selenium-webdriver';




@Injectable()
export class ProductService {

    productList: any= [];
    constructor(private http: Http){}

    getShopingLists(){

    }

    getProducts(){
        return this.productList;
    }

    addProductToList(product){
        console.log('in');
        this.productList.push(product);
        return this.productList

    }

    changeProductStatus(product){
        console.log(product);
        let productToEdit = this.productList.find(p => p.productName === product);
        if(productToEdit){
          productToEdit.isActive = !productToEdit.isActive;
        }

        console.log(this.productList);
    }
}