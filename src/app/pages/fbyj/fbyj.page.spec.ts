import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbyjPage } from './fbyj.page';

describe('FbyjPage', () => {
  let component: FbyjPage;
  let fixture: ComponentFixture<FbyjPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbyjPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbyjPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
