import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { Device } from '@ionic-native/device';//10/4/17
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Facebook } from '@ionic-native/facebook';//10/4/17 - NEED THIS
import { Storage } from '@ionic/storage';//10/4/17 - NEED THIS
import { Parse } from 'parse-js-sdk';//10/4/17 - NEED THIS
import  Lodash  from 'lodash';//10/4/17 - NEED THIS
import { Tabs } from '../pages/tabs/tabs';//10/4/17
// import { Walkthrough } from '../pages/walkthrough/walkthrough';//10/4/17
// import { DataService } from '../services/dataService';//10/4/17
// import { UserUpdateService } from '../services/userUpdateService';//10/4/17
// import { GetDetailsService } from '../services/getDetailsService';//10/4/17
// import { WalletService } from '../services/walletService';//10/4/17

declare var cordova : any;

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage:any = Tabs;
  rootPage: any;
  launchObject:any;

  constructor(private storage: Storage, private platform: Platform, private statusBar: StatusBar, private splashScreen: SplashScreen) {
    this.platformReady();
  }

  setUp() {
    var that = this;
    //determine what the root page is; has this phone done the walkthrough?
    this.storage.get("walkthroughComplete").then((result) => {
      if(result){
        this.rootPage = Tabs;
      } else {
        // this.rootPage = Walkthrough;
        // this.storage.set("walkthroughComplete", true);
      }
    })
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      Parse.initialize("Is6G3tCS4kkbZpL4v2zjWz6F3jOLea99BT1nDMrU", "f7zkG1OZkiviISG8KjUohQ68rDlPWYGvpiiqIHbL");//PRODUCTION
      Parse.serverURL = 'https://cashpass.me/passingcash';
      this.setUp();
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
  // platform.ready().then(() => {
    // Okay, so the platform is ready and our plugins are available.
    // Here you can do any higher level native things you might need.
    // statusBar.styleDefault();
    // splashScreen.hide();
  // });
}
