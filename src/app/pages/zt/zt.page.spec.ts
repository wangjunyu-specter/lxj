import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZtPage } from './zt.page';

describe('ZtPage', () => {
  let component: ZtPage;
  let fixture: ComponentFixture<ZtPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZtPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZtPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
