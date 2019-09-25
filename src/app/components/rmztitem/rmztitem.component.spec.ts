import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RmztitemComponent } from './rmztitem.component';

describe('RmztitemComponent', () => {
  let component: RmztitemComponent;
  let fixture: ComponentFixture<RmztitemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RmztitemComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RmztitemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
