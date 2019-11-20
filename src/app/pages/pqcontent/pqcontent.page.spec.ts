import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqcontentPage } from './pqcontent.page';

describe('PqcontentPage', () => {
  let component: PqcontentPage;
  let fixture: ComponentFixture<PqcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqcontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
