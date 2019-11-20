import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetPdPage } from './set-pd.page';

describe('SetPdPage', () => {
  let component: SetPdPage;
  let fixture: ComponentFixture<SetPdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetPdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetPdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
