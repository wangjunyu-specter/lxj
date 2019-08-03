import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YhboxPage } from './yhbox.page';

describe('YhboxPage', () => {
  let component: YhboxPage;
  let fixture: ComponentFixture<YhboxPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YhboxPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YhboxPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
