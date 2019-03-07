import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { IWindInfo } from '../interfaces/IWindInfo';

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


  constructor(private valuesService: ValuesService, public modalController: ModalController) {
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: InfoModalPage
    });
    return await modal.present();
  }

  ngOnInit() {
    ENV === 'dev' ? this.getDevData() : this.getData();
    // this.getData();
  }

  getData() {
    this.valuesService.getTemperature().then(
        (data: IMeteoDataResponse) => {
          const formattedData: IMeteoData = JSON.parse(data.data);
          this.temperatureFormatted = formattedData.formattedValue;
          this.temperatureValue = formattedData.rawValue;
        }
      );

    this.valuesService.getWindSpeed().then(
        (data: IMeteoDataResponse) => {
          const formattedData: IMeteoData = JSON.parse(data.data);
          this.windInfoObj.windSpeed = formattedData.formattedValue;
        }
      );

    this.valuesService.getWindDirection().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.windInfoObj.windDirection = formattedData.rawValue;
      }
    );

    this.valuesService.getRainfall().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.raindfallAmount = formattedData.formattedValue;
      }
    );

    this.valuesService.getSolarIrradiance().then(
      (data: IMeteoDataResponse) => {
        const formattedData: IMeteoData = JSON.parse(data.data);
        this.solarIrradiance = formattedData.formattedValue;
      }
    );
  }

  getDevData() {
    this.valuesService.getTemperature().subscribe(
      data => {
        this.temperatureFormatted = data.formattedValue;
        this.temperatureValue = data.rawValue;
      }
    );

    this.valuesService.getWindSpeed().subscribe(
        data => this.windInfoObj.windSpeed = data.formattedValue
      );

    this.valuesService.getWindDirection().subscribe(
      data => this.windInfoObj.windDirection = data.rawValue
    );

    this.valuesService.getRainfall().subscribe(
      data => this.raindfallAmount = data.formattedValue
    );

    this.valuesService.getSolarIrradiance().subscribe(
      data => this.solarIrradiance = data.formattedValue
    );
  }

  refreshPage(event) {
    // this.resetData();
    // this.getData();
    setTimeout(() => {
      ENV === 'dev' ? this.getDevData() : this.getData();
      event.target.complete();
    }, 2800);
  }

  resetData() {
    this.temperatureFormatted = '';
    this.temperatureValue = null;
    this.raindfallAmount = '';
    this.solarIrradiance = '';
    this.windInfoObj = {
      windDirection: null,
      windSpeed: ''
    };
  }
}
