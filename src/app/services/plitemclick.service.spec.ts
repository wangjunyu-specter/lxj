import { TestBed } from '@angular/core/testing';

import { PlitemclickService } from './plitemclick.service';

describe('PlitemclickService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlitemclickService = TestBed.get(PlitemclickService);
    expect(service).toBeTruthy();
  });
});
