import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IWindInfo } from 'src/app/interfaces/IWindInfo';

@Component({
  selector: 'app-wind-info',
  templateUrl: './wind-info.component.html',
  styleUrls: ['./wind-info.component.scss'],
})
export class WindInfoComponent implements OnInit, OnChanges {

  @Input() windInfo: IWindInfo;
  @Input() loading: boolean;
  @Input() windDirection: string;
  windDirectionLiteral: string = '';

  constructor() { }

  ngOnInit() {}


  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
    // if (changes['windInfo']) {
    //   console.log(changes['windInfo']);
    //   if (changes['windInfo'].currentValue.windDirection) {
    //     this.convertWindDirection(changes['windInfo'].currentValue.windDirection);
    //     console.log(this.windDirectionLiteral);
    //   }
    // }
    if (changes['windDirection']) {
      if (changes['windDirection'].currentValue) {
        this.convertWindDirection(changes['windDirection'].currentValue);
      }
    }
  }

  convertWindDirection(value: number) {
    console.log('switch here:', value);
    switch (true) {
      case (value >= 348.75): {
        this.windDirectionLiteral = 'North';
        break;
      }
      case (value >= 326.25): {
        this.windDirectionLiteral = 'North-NorthWest';
        break;
      }
      case (value >= 303.75): {
        this.windDirectionLiteral = 'NorthWest';
        break;
      }
      case (value >= 281.25): {
        this.windDirectionLiteral = 'West-NorthWest';
        break;
      }
      case (value >= 258.75): {
        this.windDirectionLiteral = 'West';
        break;
      }
      case (value >= 236.25): {
        this.windDirectionLiteral = 'West-SouthWest';
        break;
      }
      case (value >= 213.75): {
        this.windDirectionLiteral = 'SouthWest';
        break;
      }
      case (value >= 191.25): {
        this.windDirectionLiteral = 'South-SouthWest';
        break;
      }
      case (value >= 168.75): {
        this.windDirectionLiteral = 'South';
        break;
      }
      case (value >= 146.25): {
        this.windDirectionLiteral = 'South-SouthEast';
        break;
      }
      case (value >= 123.75): {
        this.windDirectionLiteral = 'SouthEast';
        break;
      }
      case (value >= 101.25): {
        this.windDirectionLiteral = 'East-SouthEast';
        break;
      }
      case (value >= 78.75): {
        this.windDirectionLiteral = 'East';
        break;
      }
      case (value >= 56.25): {
        this.windDirectionLiteral = 'East-NorthEast';
        break;
      }
      case (value >= 33.75): {
        this.windDirectionLiteral = 'NorthEast';
        break;
      }
      case (value >= 11.25): {
        this.windDirectionLiteral = 'North-NorthEast';
        break;
      }
      default: {
        this.windDirectionLiteral = 'error';
        break;
      }
    }
  }
}
