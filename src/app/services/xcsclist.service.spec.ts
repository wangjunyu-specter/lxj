import { TestBed } from '@angular/core/testing';

import { XcsclistService } from './xcsclist.service';

describe('XcsclistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XcsclistService = TestBed.get(XcsclistService);
    expect(service).toBeTruthy();
  });
});
