import { TestBed } from '@angular/core/testing';

import { GetproductService } from './getproduct.service';

describe('GetproductService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetproductService = TestBed.get(GetproductService);
    expect(service).toBeTruthy();
  });
});
