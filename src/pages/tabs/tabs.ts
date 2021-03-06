// import { HomePage } from './../home/home';
import { Component } from '@angular/core';

import { Page2Page } from '../page2/page2';
import { Page3Page } from '../page3/page3';

/*
  Generated class for the Tabs page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = Page2Page;
  tab2Root: any = Page3Page;

  constructor() {

  }

}