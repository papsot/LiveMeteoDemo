import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { PhotoList } from 'src/app/helpers/photoList';

@Component({
  selector: 'app-solar-irradiance',
  templateUrl: './solar-irradiance.component.html',
  styleUrls: ['./solar-irradiance.component.scss'],
})
export class SolarIrradianceComponent implements OnInit {
  @Input() irradiance: string;
  imageHref: string = '';

  constructor(private imgService: ImageService) { }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    this.imgService.getPhoto(PhotoList.irradiance).then(
      data => this.imageHref = data.urls.small
    );
  }

}
