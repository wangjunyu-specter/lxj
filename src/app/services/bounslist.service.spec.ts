import { TestBed } from '@angular/core/testing';

import { BounslistService } from './bounslist.service';

describe('BounslistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BounslistService = TestBed.get(BounslistService);
    expect(service).toBeTruthy();
  });
});
