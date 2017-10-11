//* Fix the process for picking up Facebook friends in the User table!
//* Update Dwolla API?
//* Update Plaid API?

import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// import { Storage } from '@ionic/storage';
import { IonicStorageModule } from '@ionic/storage';

import { Tabs } from '../pages/tabs/tabs';

import { Favorites } from '../pages/favorites/favorites';
import { Details } from '../pages/productDetails/productDetails';
import { Shop } from '../pages/shop/shop';
import { Wallet } from '../pages/wallet/wallet';

import { Device } from '@ionic-native/device';
import { Facebook } from '@ionic-native/facebook';
import { HTTP } from '@ionic-native/http';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { Keyboard } from '@ionic-native/keyboard';
import { SMS } from '@ionic-native/sms';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    Shop,
    Favorites,
    Details,
    Wallet,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Shop,
    Favorites,
    Details,
    Wallet,
    Tabs
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, Device, Facebook, HTTP, InAppBrowser, Keyboard, SMS, SplashScreen, StatusBar, Storage]
})
export class AppModule {}
