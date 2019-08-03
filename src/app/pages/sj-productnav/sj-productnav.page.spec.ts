import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SjProductnavPage } from './sj-productnav.page';

describe('SjProductnavPage', () => {
  let component: SjProductnavPage;
  let fixture: ComponentFixture<SjProductnavPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SjProductnavPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SjProductnavPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
