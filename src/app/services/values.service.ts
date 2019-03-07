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


  getTemperature() {
    if (ENV === 'dev') {
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
    if (ENV === 'dev') {
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
    if (ENV === 'dev') {
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
    if (ENV === 'dev') {
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
    if (ENV === 'dev') {
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
}
