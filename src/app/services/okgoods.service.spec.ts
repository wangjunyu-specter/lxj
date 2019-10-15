import { TestBed } from '@angular/core/testing';

import { OkgoodsService } from './okgoods.service';

describe('OkgoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OkgoodsService = TestBed.get(OkgoodsService);
    expect(service).toBeTruthy();
  });
});
