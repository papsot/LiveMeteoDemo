import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { Push, PushObject, PushOptions } from '@ionic-native/push/ngx';
import { ValuesService } from './services/values.service';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private push: Push,
    private valuesService: ValuesService,
    private uniqueDeviceId: UniqueDeviceID
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.pushSetup();
    });
  }

  pushSetup() {
    const options: PushOptions = {
      android: {
        senderID: '565621491090'
      },
      ios: {
        alert: 'true',
        badge: true,
        sound: 'false'
      }
    };

    const pushObject: PushObject = this.push.init(options);


    pushObject.on('notification').subscribe((notification: any) => console.log('Received a notification', notification));

    pushObject.on('registration').subscribe((registration: any) => {
      if (registration.registrationId) {
        this.getUID(registration.registrationId);
      }
      console.log('Device registered', registration);
    });

    pushObject.on('error').subscribe(error => console.error('Error with Push plugin', error));
  }


  getUID(fcmToken: string) {
    this.uniqueDeviceId.get().then(
      (uuid: any) => {
        this.sendDeviceId(uuid, fcmToken);
      }
    )
    .catch(error => console.log(error));
  }

  sendDeviceId(deviceId: string, fcmToken: string) {
    this.valuesService.setUserDevice(deviceId, fcmToken).subscribe(
      data => {
        console.log(data);
        console.log('success');
      }
    );
  }
}
