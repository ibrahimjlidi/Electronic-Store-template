// /src/app/components/product-list/product-list.component.ts

import { Component } from '@angular/core';
import { Product } from '../models/product.model';
import { ProductService } from 'src/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    // Fetch products from the service when the component is created
    this.products = this.productService.getProducts();
  }
}
