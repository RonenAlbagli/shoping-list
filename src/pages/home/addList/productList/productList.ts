import { ProductService } from './../productService';
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
    productList: any= [];
    isActive: boolean ;
  constructor(public navCtrl: NavController, private productService:ProductService) {

  }

  ngOnInit(){
      console.log(this.data);
      if(!this.data){
          this.isActive =true;
      } else if(this.data.isActive){
          this.isActive =true;
      } else {
          this.isActive = false;
      }

  }

  setProductStatus(product){
    this.isActive =!this.isActive;
    this.productService.changeProductStatus(product);

  }

  editProduct(){
      this.ProdectEdit.emit(this.data);
  }
}
