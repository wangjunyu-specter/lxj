import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchendgoodsPage } from './searchendgoods.page';

describe('SearchendgoodsPage', () => {
  let component: SearchendgoodsPage;
  let fixture: ComponentFixture<SearchendgoodsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchendgoodsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchendgoodsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
