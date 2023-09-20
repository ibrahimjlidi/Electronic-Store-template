// /src/app/services/product.service.ts

import { Injectable } from '@angular/core';
import { Product } from '../app/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = [

    {
      id: 1, // Add an id
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl0L6A1hiTmQjkt3-WQwvp71d2T-SyqDQUw&usqp=CAU',
    },
    {
      id: 2, // Add an id
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl0L6A1hiTmQjkt3-WQwvp71d2T-SyqDQUw&usqp=CAU',
    },
    {
      id: 3, // Add an id
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl0L6A1hiTmQjkt3-WQwvp71d2T-SyqDQUw&usqp=CAU',
    },
    {
      id: 4, // Add an id
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl0L6A1hiTmQjkt3-WQwvp71d2T-SyqDQUw&usqp=CAU',
    },
    {
      id: 5, // Add an id
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl0L6A1hiTmQjkt3-WQwvp71d2T-SyqDQUw&usqp=CAU',
    },
    {
      id: 6, // Add an id
      name: 'Product 2',
      description: 'Description for Product 2',
      price: 149.99,
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrl0L6A1hiTmQjkt3-WQwvp71d2T-SyqDQUw&usqp=CAU',
    },
    // Add more product objects as needed
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
