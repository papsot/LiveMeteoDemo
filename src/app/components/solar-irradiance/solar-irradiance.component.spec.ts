import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarIrradiancePage } from './solar-irradiance.page';

describe('SolarIrradiancePage', () => {
  let component: SolarIrradiancePage;
  let fixture: ComponentFixture<SolarIrradiancePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolarIrradiancePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SolarIrradiancePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
