import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScindexPage } from './scindex.page';

describe('ScindexPage', () => {
  let component: ScindexPage;
  let fixture: ComponentFixture<ScindexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScindexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScindexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
