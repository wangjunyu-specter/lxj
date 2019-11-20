import { TestBed } from '@angular/core/testing';

import { GzlistService } from './gzlist.service';

describe('GzlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GzlistService = TestBed.get(GzlistService);
    expect(service).toBeTruthy();
  });
});
