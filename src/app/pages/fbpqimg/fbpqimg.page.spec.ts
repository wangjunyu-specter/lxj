import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbpqimgPage } from './fbpqimg.page';

describe('FbpqimgPage', () => {
  let component: FbpqimgPage;
  let fixture: ComponentFixture<FbpqimgPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbpqimgPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbpqimgPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
