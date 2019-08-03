import { TestBed } from '@angular/core/testing';

import { HworderlistService } from './hworderlist.service';

describe('HworderlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HworderlistService = TestBed.get(HworderlistService);
    expect(service).toBeTruthy();
  });
});
