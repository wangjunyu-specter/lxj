import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XclxPage } from './xclx.page';

describe('XclxPage', () => {
  let component: XclxPage;
  let fixture: ComponentFixture<XclxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XclxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XclxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
