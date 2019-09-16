import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjsearchPage } from './sjsearch.page';

describe('SjsearchPage', () => {
  let component: SjsearchPage;
  let fixture: ComponentFixture<SjsearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjsearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjsearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
