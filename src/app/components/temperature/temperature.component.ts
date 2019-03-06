import { Component, OnInit, Input } from '@angular/core';
import { ValuesService } from 'src/app/services/values.service';

@Component({
  selector: 'app-temperature',
  templateUrl: './temperature.component.html',
  styleUrls: ['./temperature.component.scss'],
})
export class TemperatureComponent implements OnInit {
  @Input() temperature: string;
  @Input() imageHref: string;

  constructor() { }

  ngOnInit() {
  }

}
