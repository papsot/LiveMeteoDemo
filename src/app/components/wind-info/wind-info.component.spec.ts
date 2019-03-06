import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WindInfoPage } from './wind-info.page';

describe('WindInfoPage', () => {
  let component: WindInfoPage;
  let fixture: ComponentFixture<WindInfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WindInfoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WindInfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
