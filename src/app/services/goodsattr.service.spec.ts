import { TestBed } from '@angular/core/testing';

import { GoodsattrService } from './goodsattr.service';

describe('GoodsattrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoodsattrService = TestBed.get(GoodsattrService);
    expect(service).toBeTruthy();
  });
});
