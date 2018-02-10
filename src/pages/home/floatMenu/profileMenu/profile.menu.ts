
import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Nav } from 'ionic-angular';
// import { AddList } from '../addList/addList';

@Component({
  selector: 'profileMenu',
  templateUrl: 'profile.Menu.html'
})
export class ProfileMenu {
  @ViewChild(Nav) nav: Nav;

  pages: Array<{title: string, component: any}>;

  constructor(public navCtrl: NavController) {

  }





}
