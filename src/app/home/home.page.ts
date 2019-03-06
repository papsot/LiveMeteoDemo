import { Component, OnInit } from '@angular/core';
import { ValuesService } from '../services/values.service';
import { ImageService } from '../services/image.service';
import { IWindInfo } from '../interfaces/IWindInfo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  temperature: string = '';
  raindfallAmount: string = '';
  tempImage: string = '';
  solarIrradiance: string = '';
  windInfoObj: IWindInfo = {
    windDirection: null,
    windSpeed: ''
  };


  constructor(private valuesService: ValuesService, private imgService: ImageService) {
  }

  ngOnInit() {
    this.getData();
    this.loadImages();
  }

  getData() {
    this.valuesService.getTemperature().subscribe(
        data => this.temperature = data.formattedValue
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

  loadImages() {
    // let randomNum =  Math.floor((Math.random() * 10));

    this.imgService.searchImage('winter', 10).then(data => {
      this.tempImage = data.results[5].urls.small;
      console.log(data);
    });

  }

  setImageTheme(temperature, rainfall) {

  }
}
