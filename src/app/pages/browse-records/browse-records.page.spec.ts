import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowseRecordsPage } from './browse-records.page';

describe('BrowseRecordsPage', () => {
  let component: BrowseRecordsPage;
  let fixture: ComponentFixture<BrowseRecordsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowseRecordsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowseRecordsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
