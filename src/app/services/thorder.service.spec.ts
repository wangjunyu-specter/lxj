import { TestBed } from '@angular/core/testing';

import { ThorderService } from './thorder.service';

describe('ThorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThorderService = TestBed.get(ThorderService);
    expect(service).toBeTruthy();
  });
});
