import { TestBed } from '@angular/core/testing';

import { ProductApiServiceService } from './product-api-service.service';
import {provideHttpClient} from "@angular/common/http";

describe('ProductApiServiceService', () => {
  let service: ProductApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(ProductApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
