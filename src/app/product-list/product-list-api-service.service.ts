import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../Domain/Catalog/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductListApiServiceService {
  constructor(private httpClient: HttpClient) { }

  public getProductCollection(): Observable<any> {
    return this.httpClient.get<Product>('http://localhost/api/products');
  }
}
