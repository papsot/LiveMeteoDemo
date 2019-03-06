import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from 'src/app/services/image.service';
import { PhotoList } from 'src/app/helpers/photoList';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.scss'],
})
export class RainfallComponent implements OnInit {
  @Input() rainfall: string;
  imageHref: string = '';

  constructor(private imgService: ImageService) { }

  ngOnInit() {
    this.getImage();
  }

  getImage() {
    this.imgService.getPhoto(PhotoList.rainy).then(
      data => this.imageHref = data.urls.small
    );
  }

}
