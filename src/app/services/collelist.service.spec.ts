import { TestBed } from '@angular/core/testing';

import { CollelistService } from './collelist.service';

describe('CollelistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CollelistService = TestBed.get(CollelistService);
    expect(service).toBeTruthy();
  });
});
