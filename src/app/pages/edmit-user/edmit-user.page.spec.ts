import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EdmitUserPage } from './edmit-user.page';

describe('EdmitUserPage', () => {
  let component: EdmitUserPage;
  let fixture: ComponentFixture<EdmitUserPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EdmitUserPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EdmitUserPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
