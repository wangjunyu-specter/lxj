import { TestBed } from '@angular/core/testing';

import { DeletemyreleaseService } from './deletemyrelease.service';

describe('DeletemyreleaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DeletemyreleaseService = TestBed.get(DeletemyreleaseService);
    expect(service).toBeTruthy();
  });
});
