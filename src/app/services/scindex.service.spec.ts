import { TestBed } from '@angular/core/testing';

import { ScindexService } from './scindex.service';

describe('ScindexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScindexService = TestBed.get(ScindexService);
    expect(service).toBeTruthy();
  });
});
