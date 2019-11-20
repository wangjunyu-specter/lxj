import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BztjboxComponent } from './bztjbox.component';

describe('BztjboxComponent', () => {
  let component: BztjboxComponent;
  let fixture: ComponentFixture<BztjboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BztjboxComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BztjboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
