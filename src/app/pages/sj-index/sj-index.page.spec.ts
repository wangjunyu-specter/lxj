import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjIndexPage } from './sj-index.page';

describe('SjIndexPage', () => {
  let component: SjIndexPage;
  let fixture: ComponentFixture<SjIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
