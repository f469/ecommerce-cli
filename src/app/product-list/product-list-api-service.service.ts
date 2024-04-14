import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ProductsCollection} from "../../API/products";

@Injectable({
  providedIn: 'root'
})
export class ProductListApiServiceService {
  constructor(private httpClient: HttpClient) { }

  public getProductCollection(): Observable<ProductsCollection> {
    return this.httpClient.get<ProductsCollection>('http://localhost/api/products');
  }
}
