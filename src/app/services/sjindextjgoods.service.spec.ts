import { TestBed } from '@angular/core/testing';

import { SjindextjgoodsService } from './sjindextjgoods.service';

describe('SjindextjgoodsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SjindextjgoodsService = TestBed.get(SjindextjgoodsService);
    expect(service).toBeTruthy();
  });
});
