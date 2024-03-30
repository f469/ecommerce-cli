import { Component } from '@angular/core';
import {Product} from "../../Domain/Catalog/Product";
import {CommonModule} from "@angular/common";
import {ProductComponent} from "../product/product.component";
import {ProductListApiServiceService} from "./product-list-api-service.service";
import {ProductApiServiceService} from "../product/Service/product-api-service.service";

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductComponent],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.scss'
})
export class ProductListComponent {
  public products: Array<Product>;

  constructor(
    private httpClientList: ProductListApiServiceService,
    private httpClientProduct: ProductApiServiceService) {
    this.products = [];
    this.get();
  }
  private get(): void {
    this.httpClientList.getProductCollection().subscribe((data) => {
      const members = data["hydra:member"];
      for (let member of members) {
        this.httpClientProduct.getProduct(member.id).subscribe((data) => {
          this.products.push(data);
        });
      }
    })
  }
}
