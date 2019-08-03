import { TestBed } from '@angular/core/testing';

import { SupplierlistService } from './supplierlist.service';

describe('SupplierlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SupplierlistService = TestBed.get(SupplierlistService);
    expect(service).toBeTruthy();
  });
});
