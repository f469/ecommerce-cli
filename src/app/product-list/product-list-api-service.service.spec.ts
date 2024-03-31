import { TestBed } from '@angular/core/testing';

import { ProductListApiServiceService } from './product-list-api-service.service';

describe('ProductListApiServiceService', () => {
  let service: ProductListApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductListApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
