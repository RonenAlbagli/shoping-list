import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { Component,Input, Output, EventEmitter } from '@angular/core';
import { NavController } from 'ionic-angular';
// import {  } from '@angular/core/src/metadata/directives';
// import { EventEmitter } from '@angular/core/src/event_emitter';
// import { Input } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'productList',
  templateUrl: 'productList.html'
})
export class ProductList implements OnInit {

    @Input('data') data:any;
    @Output() ProdectEdit = new EventEmitter();
    product:any;
    productList: any= [];
    isActive: boolean =true;
  constructor(public navCtrl: NavController) {

  }

  ngOnInit(){
      console.log(this.data);
      this.product =this.data;
  }

  setProductStatus(){
    this.isActive =!this.isActive;
  }

  editProduct(){
      console.log('in');
      this.ProdectEdit.emit(this.data);
  }
}
