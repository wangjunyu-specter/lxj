import { TestBed } from '@angular/core/testing';

import { LljlService } from './lljl.service';

describe('LljlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LljlService = TestBed.get(LljlService);
    expect(service).toBeTruthy();
  });
});
