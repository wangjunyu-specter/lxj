import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductcontentPage } from './productcontent.page';

describe('ProductcontentPage', () => {
  let component: ProductcontentPage;
  let fixture: ComponentFixture<ProductcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductcontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
