import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeleteContentPage } from './selete-content.page';

describe('SeleteContentPage', () => {
  let component: SeleteContentPage;
  let fixture: ComponentFixture<SeleteContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeleteContentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeleteContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
