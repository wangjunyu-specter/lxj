import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbyjmorePage } from './fbyjmore.page';

describe('FbyjmorePage', () => {
  let component: FbyjmorePage;
  let fixture: ComponentFixture<FbyjmorePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbyjmorePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbyjmorePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
