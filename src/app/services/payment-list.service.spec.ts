import { TestBed } from '@angular/core/testing';

import { PaymentListService } from './payment-list.service';

describe('PaymentListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PaymentListService = TestBed.get(PaymentListService);
    expect(service).toBeTruthy();
  });
});
