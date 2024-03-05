import { Component } from '@angular/core';
import {Product} from "../../Domain/Catalog/Product";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../product/product.component";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products: Array<Product>;

  constructor() {
    this.products = [
      {
        reference: 'ref 1',
        name: 'name 1',
        description: 'des 1',
        price: 12.00,
        vat: 0.2
      },
      {
        reference: 'ref 2',
        name: 'name 2',
        description: 'des 2',
        price: 15.00,
        vat: 0.2
      }
    ]
  }
}
