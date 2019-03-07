import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit, OnChanges {
  @Input() temperatureFormatted: string;
  @Input() temperature: number;

  thermometerIcon: string = '';

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {

    if (changes['temperature']) {
      switch (true) {
        case this.temperature > 32: {
          this.thermometerIcon = 'thermometer-full';
          break;
        }
        case this.temperature > 25: {
          this.thermometerIcon = 'thermometer-three-quarters';
          break;
        }
        case this.temperature > 9: {
          this.thermometerIcon = 'thermometer-half';
          break;
        }
        default: {
          this.thermometerIcon = 'thermometer-empty';
          break;
        }
      }
    }
  }

}
