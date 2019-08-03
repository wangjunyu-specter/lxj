import { TestBed } from '@angular/core/testing';

import { XclistService } from './xclist.service';

describe('XclistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: XclistService = TestBed.get(XclistService);
    expect(service).toBeTruthy();
  });
});
