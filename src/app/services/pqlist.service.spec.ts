import { TestBed } from '@angular/core/testing';

import { PqlistService } from './pqlist.service';

describe('PqlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PqlistService = TestBed.get(PqlistService);
    expect(service).toBeTruthy();
  });
});
