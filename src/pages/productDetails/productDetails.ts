//This is the product detail page. It allows people to go shop, tells users more
//about a product. It also may have key words about the product or discounts.

import { Component } from '@angular/core';
import { Events, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { Facebook } from '@ionic-native/facebook';
import  { Parse } from 'parse-js-sdk';
import  Lodash  from 'lodash';
// import { BrowsingMessages } from '../../services/browseMessagingService';

@Component({
  selector: 'productDetails',
  templateUrl: 'productDetails.html'
})
export class Details {
  partnerDetails:any;
  detailsRecording:any;
  selectedItem: any;
  boutiquetext: any;
  boutiquetext1: any;
  benefit: any;
  person: any;
  theSlides: any [];
  more: boolean;
  showMoreOrLess: boolean;

  //YOU SHOULD LOG AN EVENT SIGNIFYING WHO CLICKED ON WHAT!
  //THERE SHOULD ALSO BE AN EVENT LOGGED SHOWING WHERE THE PERSON DECIDED TO GO TO!
  constructor(public navParams: NavParams, private device: Device,
    private events: Events, private storage: Storage,
    private facebook: Facebook) {
      this.selectedItem = navParams.get('item');

      var self = this;
      this.storage.get("details").then((details) => {
        this.theSlides = Lodash.find(details, function(v,k,c) {//console.log("v,k,c and self.selectedItem.businessName", v, k, c, self.selectedItem.businessName);
          return k === self.selectedItem.businessName});
        // console.log("this.slides", this.theSlides);
      })

      this.partnerDetails = {}; //console.log("1", this.launchObject);
      this.partnerDetails.date = new Date(); //console.log("2", this.launchObject);
      this.partnerDetails.platform = this.device.platform; //console.log("3", this.launchObject);
      this.partnerDetails.businessName = this.selectedItem.businessName;
      this.partnerDetails.cashBackPercent = this.selectedItem.cashBackPercent;
      this.partnerDetails.cashBack = this.selectedItem.cashBack;
      this.partnerDetails.featuredVendor = this.selectedItem.featuredVendor;
      this.partnerDetails.homePageDisplay = this.selectedItem.homePageDisplay;
      if(Parse.User.current() !== null) {
        this.partnerDetails.cashPassId = Parse.User.current().id; //console.log("4", this.launchObject);
      }
      this.facebook.logEvent('partnerDetails', this.partnerDetails);

    this.boutiquetext = this.selectedItem.onDetailsDescription.replace(/<p class="details-info">/g,"").replace(/<\/p>/g, "");
    this.boutiquetext1 = this.boutiquetext.slice(0,125);
    if(this.boutiquetext.length < 126) {
      this.showMoreOrLess = false;
    } else {
      this.showMoreOrLess = true;
    }
    // console.log("this.selectedItem", this.selectedItem);

    if(Parse.User.current() !== null){
      this.person = true;
    } else {
      this.person = false;
    }

    this.storage.get('benefitLevel').then((theBenefitLevel) => {
      this.benefit = theBenefitLevel;
    })

    this.events.subscribe('updateBenefitLevel', newBenefitLevel => {
      this.benefit = newBenefitLevel;
    })


    this.events.subscribe('login:Status', login => {
      this.person = login;
    });
  }

  moreOrLess(moreLess) {
    if(moreLess === undefined || moreLess === false) {
      this.more = true;
    } else {
      //more must be true then so change it to false!
      this.more = false;
    }
    return this.more;
  }

  browseInApp(url, businessName, cashBackPercent, cashBack, cashBackLevel): any {
    this.facebook.logEvent('partnerBrowseInApp', this.partnerDetails);
    this.partnerDetails.location = "details";
    // this.browsingMessages.gutsInApp(url, businessName, cashBackPercent, cashBack, this.partnerDetails);
  }
}
