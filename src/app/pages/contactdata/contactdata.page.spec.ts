import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactdataPage } from './contactdata.page';

describe('ContactdataPage', () => {
  let component: ContactdataPage;
  let fixture: ComponentFixture<ContactdataPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactdataPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactdataPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
