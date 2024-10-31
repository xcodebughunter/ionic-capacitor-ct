import { Component } from '@angular/core';
import { SplashScreen } from '@capacitor/splash-screen'
import { CleverTap } from '@awesome-cordova-plugins/clevertap/ngx';
import { Platform } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(platform: Platform, clevertap: CleverTap) {
    platform.ready().then(() => {
      // once the platform is ready and plugins are available,
      // do all higher level native things
      clevertap.notifyDeviceReady();
      this.initializeApp();
    })
  }

  initializeApp() {
    /* To make sure we provide the fastest app loading experience
       for our users, hide the splash screen automatically
       when the app is ready to be used:

        https://capacitor.ionicframework.com/docs/apis/splash-screen#hiding-the-splash-screen
    */
    SplashScreen.hide();
  }
}
