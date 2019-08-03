import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyreleasePage } from './myrelease.page';

describe('MyreleasePage', () => {
  let component: MyreleasePage;
  let fixture: ComponentFixture<MyreleasePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyreleasePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyreleasePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
