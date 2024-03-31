import { TestBed } from '@angular/core/testing';

import { ProductListApiServiceService } from './product-list-api-service.service';
import {provideRouter} from "@angular/router";
import {routes} from "../app.routes";
import {provideHttpClient} from "@angular/common/http";

describe('ProductListApiServiceService', () => {
  let service: ProductListApiServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({providers: [provideHttpClient()]});
    service = TestBed.inject(ProductListApiServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
