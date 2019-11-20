import { TestBed } from '@angular/core/testing';

import { ZtListService } from './zt-list.service';

describe('ZtListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ZtListService = TestBed.get(ZtListService);
    expect(service).toBeTruthy();
  });
});
