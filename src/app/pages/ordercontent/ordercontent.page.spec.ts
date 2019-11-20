import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdercontentPage } from './ordercontent.page';

describe('OrdercontentPage', () => {
  let component: OrdercontentPage;
  let fixture: ComponentFixture<OrdercontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdercontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdercontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
