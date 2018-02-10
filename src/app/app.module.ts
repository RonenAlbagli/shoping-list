import { ProductService } from './../pages/home/addList/productService';
import { FloatMenu } from './../pages/home/floatMenu/floatMenu';
import { AddList } from './../pages/home/addList/addList';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { Page3Page } from '../pages/page3/page3';
import { Page2Page } from '../pages/page2/page2';
import { shopingLists } from '../pages/home/shopingLists/shopingLists';
import { ProductList } from '../pages/home/addList/productList/productList';
import { HttpModule } from '@angular/http';
import { ProfileMenu } from '../pages/home/floatMenu/profileMenu/profile.menu';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    TabsPage,
    Page3Page,
    Page2Page,
    shopingLists,
    AddList,
    FloatMenu,
    ProfileMenu,
    ProductList
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    Page3Page,
    Page2Page,
    TabsPage,
    shopingLists,
    AddList,
    FloatMenu,
    ProfileMenu,
    ProductList
  ],
  providers: [
    StatusBar,
    SplashScreen,
    ProductService,
    {provide: ErrorHandler, useClass: IonicErrorHandler, }
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AppModule {}
