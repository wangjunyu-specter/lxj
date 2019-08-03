import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlecontentPage } from './articlecontent.page';

describe('ArticlecontentPage', () => {
  let component: ArticlecontentPage;
  let fixture: ComponentFixture<ArticlecontentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlecontentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlecontentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
