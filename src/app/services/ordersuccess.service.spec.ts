import { TestBed } from '@angular/core/testing';

import { OrdersuccessService } from './ordersuccess.service';

describe('OrdersuccessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrdersuccessService = TestBed.get(OrdersuccessService);
    expect(service).toBeTruthy();
  });
});
