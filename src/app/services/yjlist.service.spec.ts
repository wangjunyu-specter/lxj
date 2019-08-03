import { TestBed } from '@angular/core/testing';

import { YjlistService } from './yjlist.service';

describe('YjlistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YjlistService = TestBed.get(YjlistService);
    expect(service).toBeTruthy();
  });
});
