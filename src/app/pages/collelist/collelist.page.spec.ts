import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollelistPage } from './collelist.page';

describe('CollelistPage', () => {
  let component: CollelistPage;
  let fixture: ComponentFixture<CollelistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollelistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollelistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
