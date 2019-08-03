import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XcsclistPage } from './xcsclist.page';

describe('XcsclistPage', () => {
  let component: XcsclistPage;
  let fixture: ComponentFixture<XcsclistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XcsclistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XcsclistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
