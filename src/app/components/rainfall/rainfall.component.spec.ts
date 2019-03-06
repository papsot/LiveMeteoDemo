import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallPage } from './rainfall.page';

describe('RainfallPage', () => {
  let component: RainfallPage;
  let fixture: ComponentFixture<RainfallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RainfallPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RainfallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
