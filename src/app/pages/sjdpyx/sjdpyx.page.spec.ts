import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjdpyxPage } from './sjdpyx.page';

describe('SjdpyxPage', () => {
  let component: SjdpyxPage;
  let fixture: ComponentFixture<SjdpyxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjdpyxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjdpyxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
