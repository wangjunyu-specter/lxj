import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GwcitemComponent } from './gwcitem.component';

describe('GwcitemComponent', () => {
  let component: GwcitemComponent;
  let fixture: ComponentFixture<GwcitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GwcitemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GwcitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
