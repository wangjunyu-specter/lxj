import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XclistPage } from './xclist.page';

describe('XclistPage', () => {
  let component: XclistPage;
  let fixture: ComponentFixture<XclistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XclistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XclistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
