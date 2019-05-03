import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-relative-humidity',
  templateUrl: './relative-humidity.component.html',
  styleUrls: ['./relative-humidity.component.scss'],
})
export class RelativeHumidityComponent implements OnInit {
  @Input() relativeHumidity: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {}

}
