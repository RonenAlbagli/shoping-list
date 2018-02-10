import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'addList',
  templateUrl: 'addList.html'
})
export class AddList {

    productList: any= [];
    amountSize1: boolean = true;
    // amountSize2:  boolean = false;
  constructor(public navCtrl: NavController) {

  }

  addProduct(product,amount, size){
    let existProduct =  this.productList.find(p => p.product === product.value);
    if(existProduct){
       //set the nre value for exist product
        existProduct.product = 'test';
    } else {
        let sizeAmount:string;
        if(size.checked){
            sizeAmount ='g.';
        } else {
            sizeAmount = 'unit';
        }

      this.productList.push({product:product.value ,amount:amount.value, size:sizeAmount});
    }
      product.setValue('');
        amount.setValue('');
        this.amountSize1 = true;

  }

  changeRadioStatus(status){
      
    this.amountSize1 =status;
  }

  handleUserUpdated(productEdit ,product,amount,size){
      console.log(productEdit);
    product.setValue(productEdit.product);
    amount.setValue(productEdit.amount);

    if(size === 'g.'){
        this.amountSize1 = true;
    } else {
        this.amountSize1 = false;
    }
    
  }

}
