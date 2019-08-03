import { TestBed } from '@angular/core/testing';

import { SearchrecodeService } from './searchrecode.service';

describe('SearchrecodeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchrecodeService = TestBed.get(SearchrecodeService);
    expect(service).toBeTruthy();
  });
});
