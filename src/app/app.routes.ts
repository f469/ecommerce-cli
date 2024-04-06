import { Routes } from '@angular/router';
import {ProductListComponent} from "./product-list/product-list.component";
import {ProductComponent} from "./product/product.component";
import {ProductDetailsComponent} from "./product-details/product-details.component";

export const routes: Routes = [
  { path: '', component: ProductListComponent },
  { path: 'details', component: ProductDetailsComponent },
];
