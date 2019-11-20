import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagetitlePage } from './pagetitle.page';

describe('PagetitlePage', () => {
  let component: PagetitlePage;
  let fixture: ComponentFixture<PagetitlePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagetitlePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagetitlePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
