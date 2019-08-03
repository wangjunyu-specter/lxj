import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmojipickComponent } from './emojipick.component';

describe('EmojipickComponent', () => {
  let component: EmojipickComponent;
  let fixture: ComponentFixture<EmojipickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmojipickComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmojipickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
