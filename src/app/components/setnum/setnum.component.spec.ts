import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetnumPage } from './setnum.page';

describe('SetnumPage', () => {
  let component: SetnumPage;
  let fixture: ComponentFixture<SetnumPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetnumPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetnumPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
