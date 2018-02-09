import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'addList',
  templateUrl: 'addList.html'
})
export class AddList {

    productList: any= [];
  constructor(public navCtrl: NavController) {

  }

  addProduct(product,amount, size){
      let sizeAmount:string;

      if(size.checked){
          sizeAmount ='g.';
      } else {
          sizeAmount = 'unit';
      }

      this.productList.push({product:product.value ,amount:amount.value, size:sizeAmount})

  }

}
