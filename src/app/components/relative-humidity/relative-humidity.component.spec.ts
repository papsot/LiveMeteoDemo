import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RelativeHumidityPage } from './relative-humidity.page';

describe('RelativeHumidityPage', () => {
  let component: RelativeHumidityPage;
  let fixture: ComponentFixture<RelativeHumidityPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RelativeHumidityPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RelativeHumidityPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
