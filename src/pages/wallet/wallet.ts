//this is the wallet page. few changes planned to differentiate this from the original page but:
//1) this page should include the contact invite
//2) we may add the ability to donate to charities on this page (what is the UX for this?)

//going to update Plaid?

//We need to update Buddy for more types of conversation . . . what type of contengincies?

//probably need a table to donate cash back to given charities

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'wallet-home',
  templateUrl: 'wallet.html'
})
export class Wallet {

  constructor(public navCtrl: NavController) {

  }

}
