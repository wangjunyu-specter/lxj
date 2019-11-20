import { TestBed } from '@angular/core/testing';

import { ShopNavService } from './shop-nav.service';

describe('ShopNavService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShopNavService = TestBed.get(ShopNavService);
    expect(service).toBeTruthy();
  });
});
