import { Component } from '@angular/core';
import { ValuesService } from '../services/values.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  temperature: string = '15';
  windDirection: string = '';
  windSpeed: string = '';
  raindfallAmount: string = '';


  constructor(private valuesService: ValuesService) {
  }

  getData() {
    this.valuesService.getTemperature().subscribe()
  }
}
