import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjTopPage } from './sj-top.page';

describe('SjTopPage', () => {
  let component: SjTopPage;
  let fixture: ComponentFixture<SjTopPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjTopPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjTopPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
