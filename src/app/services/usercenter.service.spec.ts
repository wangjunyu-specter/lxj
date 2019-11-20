import { TestBed } from '@angular/core/testing';

import { UsercenterService } from './usercenter.service';

describe('UsercenterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsercenterService = TestBed.get(UsercenterService);
    expect(service).toBeTruthy();
  });
});
