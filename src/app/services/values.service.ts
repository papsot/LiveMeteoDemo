import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
import { HTTP } from '@ionic-native/http/ngx';
import { Platform } from '@ionic/angular';
import { Observable } from 'rxjs';
import { IMeteoData } from '../interfaces/IMeteoData';

@Injectable({
  providedIn: 'root'
})
export class ValuesService {

  constructor(private http: HTTP, private platform: Platform) { }

  getTemperature(): Observable<IMeteoData> {

    const mockTemperatureData: IMeteoData = {
      formattedValue: '14,4',
      rawValue: 14.38697,
      unitSymbol: '',
      method: ''
    };

    return Observable.create((observer) => {
      observer.next(mockTemperatureData);
      observer.complete();
    });

    // if (this.platform.is('desktop')) {

    //   // return new Observable();

    //   return new Observable().of

    //   // return Observable.create( observer => {
    //   //   observer.next('hello');
    //   //   observer.complete();
    //   // });
    //   // this.httpCLient.get('http://62.103.214.128:5555/values?node=202&units=metric&locale=el&startDate=latest');
    // } else {
    //   return this.http.get('http://62.103.214.128:5555/values?node=202&units=metric&locale=el&startDate=latest', {}, {});
    // }
  }

  getWindSpeed() {
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
  }

  getWindDirection() {
    const mockWindDirectionData: IMeteoData = {
      formattedValue: '354,9',
      rawValue: 354.9297,
      unitSymbol: '',
      method: ''
    };

    return Observable.create((observer) => {
      observer.next(mockWindDirectionData);
      observer.complete();
    });
  }

  getRainfall() {
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
  }
}
