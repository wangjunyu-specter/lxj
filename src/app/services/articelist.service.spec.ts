import { TestBed } from '@angular/core/testing';

import { ArticelistService } from './articelist.service';

describe('ArticelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticelistService = TestBed.get(ArticelistService);
    expect(service).toBeTruthy();
  });
});
