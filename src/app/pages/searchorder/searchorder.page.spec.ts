import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchorderPage } from './searchorder.page';

describe('SearchorderPage', () => {
  let component: SearchorderPage;
  let fixture: ComponentFixture<SearchorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
