import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PricebuttonPage } from './pricebutton.page';

describe('PricebuttonPage', () => {
  let component: PricebuttonPage;
  let fixture: ComponentFixture<PricebuttonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PricebuttonPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PricebuttonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
