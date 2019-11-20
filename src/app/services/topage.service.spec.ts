import { TestBed } from '@angular/core/testing';

import { TopageService } from './topage.service';

describe('TopageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TopageService = TestBed.get(TopageService);
    expect(service).toBeTruthy();
  });
});
