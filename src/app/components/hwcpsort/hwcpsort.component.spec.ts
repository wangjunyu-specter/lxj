import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HwcpsortPage } from './hwcpsort.page';

describe('HwcpsortPage', () => {
  let component: HwcpsortPage;
  let fixture: ComponentFixture<HwcpsortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HwcpsortPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HwcpsortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
