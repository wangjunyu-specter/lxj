import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BounsPage } from './bouns.page';

describe('BounsPage', () => {
  let component: BounsPage;
  let fixture: ComponentFixture<BounsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BounsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BounsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
