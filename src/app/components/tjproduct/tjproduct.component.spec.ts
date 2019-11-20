import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TjproductPage } from './tjproduct.page';

describe('TjproductPage', () => {
  let component: TjproductPage;
  let fixture: ComponentFixture<TjproductPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TjproductPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TjproductPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
