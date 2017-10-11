//This is the shop page. Users shop here and then see the Tinder cards.

//?Where do I put the Tinder cards in the file structure?

//This is the equivalent of the home page in the first version of the app

//There needs to be a key words table. Key words should include:
//products, brands, businessName, manufacturers, everything in the brandKeyWords
//field in the Offer table. These terms are the options a person is allowed to search
//they should be able to do so in combination. We need an and/or option with them?

//SERVICE: search service (similar to the old filter service)
//SERVICE: need a feeling lucky or personalization search?
//SERVICE: service that adds favorites to local storage
//SERVICE: updates favorites (adds) on the user object/favories table

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'shop.html'
})
export class Shop {

  constructor(public navCtrl: NavController) {

  }

}
