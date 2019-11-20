import { TestBed } from '@angular/core/testing';

import { ShopContentService } from './shop-content.service';

describe('ShopContentService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopContentService = TestBed.get(ShopContentService);
    expect(service).toBeTruthy();
  });
});
