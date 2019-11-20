import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NomoreComponent } from './nomore.component';

describe('NomoreComponent', () => {
  let component: NomoreComponent;
  let fixture: ComponentFixture<NomoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NomoreComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NomoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
