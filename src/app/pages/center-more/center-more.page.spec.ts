import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterMorePage } from './center-more.page';

describe('CenterMorePage', () => {
  let component: CenterMorePage;
  let fixture: ComponentFixture<CenterMorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CenterMorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CenterMorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
