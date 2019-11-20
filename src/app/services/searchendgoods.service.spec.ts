import { TestBed } from '@angular/core/testing';

import { SearchendgoodsService } from './searchendgoods.service';

describe('SearchendgoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SearchendgoodsService = TestBed.get(SearchendgoodsService);
    expect(service).toBeTruthy();
  });
});
