import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SharesearchPage } from './sharesearch.page';

describe('SharesearchPage', () => {
  let component: SharesearchPage;
  let fixture: ComponentFixture<SharesearchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SharesearchPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SharesearchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
