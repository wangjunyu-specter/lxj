import { TestBed } from '@angular/core/testing';

import { SeleteMediaService } from './selete-media.service';

describe('SeleteMediaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SeleteMediaService = TestBed.get(SeleteMediaService);
    expect(service).toBeTruthy();
  });
});
