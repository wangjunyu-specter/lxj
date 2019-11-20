import { TestBed } from '@angular/core/testing';

import { PayorderService } from './payorder.service';

describe('PayorderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayorderService = TestBed.get(PayorderService);
    expect(service).toBeTruthy();
  });
});
