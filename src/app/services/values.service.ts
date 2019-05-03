import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IMeteoData } from '../interfaces/IMeteoData';
import { ENV } from '../interfaces/environment';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private http: HTTP, private platform: Platform, private httpClient: HttpClient) { }

  setUserDevice(deviceId: string, fcmToken: string) {
    return this.httpClient.get(`http://webcreations.gr/meteo_live/Register/RegisterDevice.php?token=${fcmToken}&deviceid=${deviceId}`);
  }


  // http://webcreations.gr/meteo_live/Register/RegisterDevice.php?token="token"&deviceid="deviceid"

  getTemperature() {
    if (ENV) {
      const temperature = Math.round(Math.random() * 40);

      const mockTemperatureData: IMeteoData = {
        formattedValue: temperature.toString(),
        rawValue: temperature,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockTemperatureData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=202&units=metric&locale=el&startDate=latest', {}, {});
    }
  }

  getWindSpeed() {
    if (ENV) {
      const mockWindSpeedData: IMeteoData = {
        formattedValue: '2,2',
        rawValue: 2.193,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockWindSpeedData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=204&units=metric&locale=el&startDate=latest', {}, {});
    }

  }

  getWindDirection() {
    if (ENV) {
      const mockWindDirectionData: IMeteoData = {
        formattedValue: '354,9',
        rawValue: 124.9297,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockWindDirectionData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=200&units=metric&locale=el&startDate=latest', {}, {});
    }
  }

  getRainfall() {
    if (ENV) {
      const mockRainfallData: IMeteoData = {
        formattedValue: '0,0',
        rawValue: 0.0,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockRainfallData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=201&units=metric&locale=el&startDate=latest', {}, {});
    }

  }

  getSolarIrradiance() {
    if (ENV) {
      const mockSolarData: IMeteoData = {
        formattedValue: '483,9',
        rawValue: 483.9017,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockSolarData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=199&units=metric&locale=el&startDate=latest', {}, {});
    }
  }

  getRelativeHumidity() {
    if (ENV) {
      const mockRelativeHumidityData: IMeteoData = {
        formattedValue: '32.2',
        rawValue: 32.234,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockRelativeHumidityData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=198&units=metric&locale=el&startDate=latest', {}, {});
    }
  }

  getLeafHumidity() {
    if (ENV) {
      const mockLeafHumidityData: IMeteoData = {
        formattedValue: '30.1',
        rawValue: 30.123,
        unitSymbol: '',
        method: ''
      };

      return Observable.create((observer) => {
        observer.next(mockLeafHumidityData);
        observer.complete();
      });
    } else {
      return this.http.get('http://62.103.214.128:5555/values?node=196&units=metric&locale=el&startDate=latest', {}, {});
    }
  }
}
