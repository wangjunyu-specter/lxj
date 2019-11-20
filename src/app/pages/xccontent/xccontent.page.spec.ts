import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XccontentPage } from './xccontent.page';

describe('XccontentPage', () => {
  let component: XccontentPage;
  let fixture: ComponentFixture<XccontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XccontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XccontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
