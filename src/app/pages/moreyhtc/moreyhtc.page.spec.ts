import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreyhtcPage } from './moreyhtc.page';

describe('MoreyhtcPage', () => {
  let component: MoreyhtcPage;
  let fixture: ComponentFixture<MoreyhtcPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MoreyhtcPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MoreyhtcPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
