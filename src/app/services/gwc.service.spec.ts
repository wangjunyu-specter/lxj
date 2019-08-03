import { TestBed } from '@angular/core/testing';

import { GwcService } from './gwc.service';

describe('GwcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GwcService = TestBed.get(GwcService);
    expect(service).toBeTruthy();
  });
});
