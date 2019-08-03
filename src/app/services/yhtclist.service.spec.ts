import { TestBed } from '@angular/core/testing';

import { YhtclistService } from './yhtclist.service';

describe('YhtclistService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: YhtclistService = TestBed.get(YhtclistService);
    expect(service).toBeTruthy();
  });
});
