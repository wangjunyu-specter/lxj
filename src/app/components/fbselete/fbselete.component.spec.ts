import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FbseleteComponent } from './fbselete.component';

describe('FbseleteComponent', () => {
  let component: FbseleteComponent;
  let fixture: ComponentFixture<FbseleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FbseleteComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FbseleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
