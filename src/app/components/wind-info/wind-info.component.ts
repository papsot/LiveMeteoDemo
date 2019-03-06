import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { IWindInfo } from 'src/app/interfaces/IWindInfo';
import { ImageService } from 'src/app/services/image.service';
import { PhotoList } from 'src/app/helpers/photoList';

@Component({
  selector: 'app-wind-info',
  templateUrl: './wind-info.component.html',
  styleUrls: ['./wind-info.component.scss'],
})
export class WindInfoComponent implements OnInit, OnChanges {

  @Input() windInfo: IWindInfo;
  windDirectionLiteral: string = '';
  imageHref: string = '';

  constructor(private imgService: ImageService) { }

  ngOnInit() {}


  ngOnChanges(changes: SimpleChanges) {
    this.convertWindDirection(changes['windInfo'].currentValue.windDirection);
    this.getImage();
  }

  getImage() {
    this.imgService.getPhoto(PhotoList.windy).then(
      data => this.imageHref = data.urls.small
    );
  }

  convertWindDirection(value: number) {
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
        this.windDirectionLiteral = 'ESE';
        break;
      }
      case (value >= 78.75): {
        this.windDirectionLiteral = 'E';
        break;
      }
      case (value >= 56.25): {
        this.windDirectionLiteral = 'ENE';
        break;
      }
      case (value >= 33.75): {
        this.windDirectionLiteral = 'NE';
        break;
      }
      case (value >= 11.25): {
        this.windDirectionLiteral = 'NNE';
        break;
      }
      default: {
        this.windDirectionLiteral = '';
        break;
      }
    }
  }
}
