import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YjcontentPage } from './yjcontent.page';

describe('YjcontentPage', () => {
  let component: YjcontentPage;
  let fixture: ComponentFixture<YjcontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YjcontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YjcontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
