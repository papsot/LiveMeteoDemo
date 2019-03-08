import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rainfall',
  templateUrl: './rainfall.component.html',
  styleUrls: ['./rainfall.component.scss'],
})
export class RainfallComponent implements OnInit {
  @Input() rainfall: string;
  @Input() loading: boolean;

  constructor() { }

  ngOnInit() {
  }

}
