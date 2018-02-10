import { ProductService } from './productService';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Product } from './../../models/productModel' 
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Component({
  selector: 'addList',
  templateUrl: 'addList.html'
})
export class AddList implements OnInit {

    productList: any= [];
    amountSize1: boolean = true;
  constructor(public navCtrl: NavController, private productService: ProductService) {

  }

  ngOnInit(){
      this.getListProduts();
      console.log(this.productList)
  }

  addProduct(product,amount, size){
    let existProduct =  this.productService.productList.find(p => p.productName === product.value);
    if(existProduct){
    //set the nre value for exist product
        existProduct.productName = 'test';
    } else {
        let sizeAmount:string;
        if(size.checked){
            sizeAmount ='g.';
        } else {
            sizeAmount = 'unit';
        }

        let NewProduct = new Product(product.value ,amount.value,sizeAmount, true);
        this.productService.addProductToList(NewProduct);
        // .subscribe((data)=>{
        //     console.log('product was added');
        //     product.setValue('');
        //     amount.setValue('');
        //     this.amountSize1 = true;
        // })\
        this.getListProduts();
    }




  }
  getListProduts(){
    this.productList = this.productService.getProducts();
 }

  changeRadioStatus(status){
    this.amountSize1 =status;
  }

  handleUserUpdated(productEdit ,product,amount,size){

    product.setValue(productEdit.productName);
    amount.setValue(productEdit.productAmount);

    if(size === 'g.'){
        this.amountSize1 = true;
    } else {
        this.amountSize1 = false;
    }
    
  }

}
