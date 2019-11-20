import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PllistComponent } from './pllist.component';

describe('PllistComponent', () => {
  let component: PllistComponent;
  let fixture: ComponentFixture<PllistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PllistComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PllistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
