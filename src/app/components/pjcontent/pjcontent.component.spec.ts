import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PjcontentPage } from './pjcontent.page';

describe('PjcontentPage', () => {
  let component: PjcontentPage;
  let fixture: ComponentFixture<PjcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PjcontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PjcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
