import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodssortPage } from './goodssort.page';

describe('GoodssortPage', () => {
  let component: GoodssortPage;
  let fixture: ComponentFixture<GoodssortPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodssortPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodssortPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
