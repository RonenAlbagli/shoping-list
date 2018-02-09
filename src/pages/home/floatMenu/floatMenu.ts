
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
import { AddList } from '../addList/addList';

@Component({
  selector: 'floatMenu',
  templateUrl: 'floatMenu.html'
})
export class FloatMenu {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {
    this.pages = [
      { title: 'Home', component: AddList }
    ];
  }




  addNewList(){
    this.navCtrl.push(AddList);
  }

}
