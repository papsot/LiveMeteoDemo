import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-solar-irradiance',
  templateUrl: './solar-irradiance.component.html',
  styleUrls: ['./solar-irradiance.component.scss'],
})
export class SolarIrradianceComponent implements OnInit {
  @Input() irradiance: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
