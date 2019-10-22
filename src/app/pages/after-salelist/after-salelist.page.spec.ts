import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterSalelistPage } from './after-salelist.page';

describe('AfterSalelistPage', () => {
  let component: AfterSalelistPage;
  let fixture: ComponentFixture<AfterSalelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterSalelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterSalelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
