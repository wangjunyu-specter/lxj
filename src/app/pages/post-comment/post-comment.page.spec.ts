import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCommentPage } from './post-comment.page';

describe('PostCommentPage', () => {
  let component: PostCommentPage;
  let fixture: ComponentFixture<PostCommentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostCommentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostCommentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
