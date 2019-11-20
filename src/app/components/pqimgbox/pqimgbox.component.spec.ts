import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PqimgboxComponent } from './pqimgbox.component';

describe('PqimgboxComponent', () => {
  let component: PqimgboxComponent;
  let fixture: ComponentFixture<PqimgboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PqimgboxComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PqimgboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
