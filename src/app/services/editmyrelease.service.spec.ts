import { TestBed } from '@angular/core/testing';

import { EditmyreleaseService } from './editmyrelease.service';

describe('EditmyreleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditmyreleaseService = TestBed.get(EditmyreleaseService);
    expect(service).toBeTruthy();
  });
});
