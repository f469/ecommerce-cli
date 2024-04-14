import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../../../Domain/Catalog/Product";

@Injectable({
  providedIn: 'root'
})
export class ProductApiServiceService {

  constructor(private httpClient: HttpClient) { }

  public getProduct(id: string): Observable<Product> {
    return this.httpClient.get<Product>(`http://localhost/api/products/${id}`);
  }
}
