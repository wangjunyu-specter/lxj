import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PayboxComponent } from './paybox.component';

describe('PayboxComponent', () => {
  let component: PayboxComponent;
  let fixture: ComponentFixture<PayboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PayboxComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PayboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
