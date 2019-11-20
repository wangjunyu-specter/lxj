import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GoodsattrPage } from './goodsattr.page';

describe('GoodsattrPage', () => {
  let component: GoodsattrPage;
  let fixture: ComponentFixture<GoodsattrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GoodsattrPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GoodsattrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
