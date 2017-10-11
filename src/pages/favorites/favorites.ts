//This is the favorites page.

//* No need for a service getting the favorites as this should be attached to the User;
//* There needs to be a way of adding favorites locally for storage
//SERVICE: there needs to be a service updating (DELETING) favorites on the user object OR user table

//?What is the layout of this page?

//Do we show applicable badges for given items?

//This is two tab? So as to show the Badges? Perhaps the badges is a separate tab?

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'favorites.html'
})
export class Favorites {

  constructor(public navCtrl: NavController) {

  }

}
