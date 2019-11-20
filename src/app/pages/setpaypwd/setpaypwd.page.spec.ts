import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetpaypwdPage } from './setpaypwd.page';

describe('SetpaypwdPage', () => {
  let component: SetpaypwdPage;
  let fixture: ComponentFixture<SetpaypwdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetpaypwdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetpaypwdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
