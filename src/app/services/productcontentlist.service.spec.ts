import { TestBed } from '@angular/core/testing';

import { ProductcontentlistService } from './productcontentlist.service';

describe('ProductcontentlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ProductcontentlistService = TestBed.get(ProductcontentlistService);
    expect(service).toBeTruthy();
  });
});
