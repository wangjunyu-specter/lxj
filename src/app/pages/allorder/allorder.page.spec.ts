import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllorderPage } from './allorder.page';

describe('AllorderPage', () => {
  let component: AllorderPage;
  let fixture: ComponentFixture<AllorderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllorderPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllorderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
