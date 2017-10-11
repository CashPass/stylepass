import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { Shop } from '../shop/shop';
import { Favorites } from '../favorites/favorites';
import { Wallet } from '../wallet/wallet';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs {
  index:any;
  tab1Root: any = Shop;
  tab2Root: any = Favorites;
  tab3Root: any = Wallet;

  constructor(public navParams: NavParams) {
    //I wonder what this is about from original version - 10/4/17
    if(navParams.get('index') === undefined || navParams.get('index') === null){
        this.index = "0";
    } else {
        this.index = navParams.get('index');
    }
    console.log("Hello?");
    console.log("Hello navParams?", navParams);
    console.log("Hello index?", this.index);
  }
}
