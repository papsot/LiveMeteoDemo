import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-leaf-humidity',
  templateUrl: './leaf-humidity.component.html',
  styleUrls: ['./leaf-humidity.component.scss'],
})
export class LeafHumidityComponent implements OnInit {
  @Input() leafHumidity: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {}

}
