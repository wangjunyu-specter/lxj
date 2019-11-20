import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatecontentPage } from './datecontent.page';

describe('DatecontentPage', () => {
  let component: DatecontentPage;
  let fixture: ComponentFixture<DatecontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatecontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatecontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
