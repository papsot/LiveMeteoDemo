import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { IWindInfo } from '../interfaces/IWindInfo';

import { UniqueDeviceID } from '@ionic-native/unique-device-id/ngx';

import { ModalController } from '@ionic/angular';
import { InfoModalPage } from '../modals/info-modal/info-modal.page';
import { IMeteoDataResponse, IMeteoData } from '../interfaces/IMeteoData';
import { ENV } from '../interfaces/environment';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  temperatureFormatted: string = '';
  temperatureValue: number = null;
  raindfallAmount: string = '';
  tempImage: string = '';
  solarIrradiance: string = '';
  windInfoObj: IWindInfo = {
    windDirection: null,
    windSpeed: ''
  };

  windDirection: number;

  relativeHumidity: string = '';
  leafHumidity: string = '';

  temperatureLoading: boolean;
  windLoading: boolean;
  rainfallLoading: boolean;
  solarLoading: boolean;
  relativeHumidityLoading: boolean;
  leafHumidityLoading: boolean;


  constructor(private valuesService: ValuesService, public modalController: ModalController, private deviceId: UniqueDeviceID) {
    this.startLoaders();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InfoModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
    if (ENV) {
      this.getDevData();
    } else {
      this.getData();
      // this.getDeviceId();
    }

  }

  getData() {
    this.valuesService.getTemperature().then(
        (data: IMeteoDataResponse) => {
          const formattedData: IMeteoData = JSON.parse(data.data);
          this.temperatureFormatted = formattedData.formattedValue;
          this.temperatureValue = formattedData.rawValue;
          this.temperatureLoading = false;
        }
      );

    this.valuesService.getWindSpeed().then(
        (data: IMeteoDataResponse) => {
          const formattedData: IMeteoData = JSON.parse(data.data);
          this.windInfoObj.windSpeed = formattedData.formattedValue;
          this.windLoading = false;
        },
        error => console.log(error)
      );

    this.valuesService.getWindDirection().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.windDirection = formattedData.rawValue;
      }
    );

    this.valuesService.getRainfall().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.raindfallAmount = formattedData.formattedValue;
        this.rainfallLoading = false;
      }
    );

    this.valuesService.getSolarIrradiance().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.solarIrradiance = formattedData.formattedValue;
        this.solarLoading = false;
      }
    );

    this.valuesService.getRelativeHumidity().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.relativeHumidity = formattedData.formattedValue;
        this.relativeHumidityLoading = false;
      }
    );

    this.valuesService.getLeafHumidity().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.leafHumidity = formattedData.formattedValue;
        this.leafHumidityLoading = false;
      }
    );
  }

  getDevData() {
    this.valuesService.getTemperature().subscribe(
      data => {
        this.temperatureFormatted = data.formattedValue;
        this.temperatureValue = data.rawValue;
        this.temperatureLoading = false;
      }
    );

    this.valuesService.getWindSpeed().subscribe(
        data => {
          this.windInfoObj.windSpeed = data.formattedValue;
          this.windLoading = false;
        }
      );

    this.valuesService.getWindDirection().subscribe(
      // data => this.windInfoObj.windDirection = data.rawValue
      data => this.windDirection = data.rawValue
    );

    this.valuesService.getRainfall().subscribe(
      data => {
        this.raindfallAmount = data.formattedValue;
        this.rainfallLoading = false;
      }
    );

    this.valuesService.getSolarIrradiance().subscribe(
      data => {
        this.solarIrradiance = data.formattedValue;
        this.solarLoading = false;
      }
    );

    this.valuesService.getRelativeHumidity().subscribe(
      data => {
        this.relativeHumidity = data.formattedValue;
        this.relativeHumidityLoading = false;
      }
    );

    this.valuesService.getLeafHumidity().subscribe(
      data => {
        this.leafHumidity = data.formattedValue;
        this.leafHumidityLoading = false;
      }
    );
  }

  refreshPage(event) {
    this.resetData();
    this.startLoaders();
    // this.getData();
    setTimeout(() => {
      ENV ? this.getDevData() : this.getData();
      event.target.complete();
    }, 800);
  }

  startLoaders() {
    this.temperatureLoading = true;
    this.windLoading = true;
    this.solarLoading = true;
    this.rainfallLoading = true;
    this.relativeHumidityLoading = true;
    this.leafHumidityLoading = true;
  }

  // ******* NOT USED

  // getDeviceId() {
  //   this.deviceId.get().then(
  //     data => this.sendDeviceId(data)
  //   );
  // }

  // sendDeviceId(deviceId: string) {
  //   this.valuesService.setUserDevice(deviceId).subscribe(
  //     data => {
  //       console.log(data);
  //       console.log('success');
  //     }
  //   );
  // }
  // *****************



  resetData() {
    this.temperatureFormatted = '';
    this.temperatureValue = null;
    this.raindfallAmount = '';
    this.solarIrradiance = '';
    this.windInfoObj = {
      windDirection: null,
      windSpeed: ''
    };
    this.windDirection = null;
    this.relativeHumidity = '';
    this.leafHumidity = '';
  }
}
