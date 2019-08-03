import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactlistPage } from './contactlist.page';

describe('ContactlistPage', () => {
  let component: ContactlistPage;
  let fixture: ComponentFixture<ContactlistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactlistPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactlistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
