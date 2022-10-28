import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [];
  constructor(private http: HttpClient) {
    this.products = [];
  }

  getProducts() {
    this.http.get<[]>('../assets/data.json').subscribe((res) => {
      for (let index = 0; index < res.length; index++) {
      const product: Product = {
        id: res[index]['id'],
        name: res[index]['name'],
        price: res[index]['price'],
        description: res[index]['description'],
        url: res[index]['url'],
        ItemsNo: 0,
      };
      this.products.unshift(product);
    }
    });
    return this.products;
  }

  clearCart() {
    for (let index = 0; index < this.products.length; index++) {
      this.products[index].ItemsNo = 0;
    }
  }

  getProduct(id: number): Product {
    return this.products.filter((p) => p.id == id)[0];
  }

  getProductsInCart(): Product[] {
    return this.products.filter((p: Product) => p.ItemsNo > 0);
  }
  addToCart(product: Product): void {
    let index = this.products.findIndex((p) => p.id == product.id);
    this.products[index].ItemsNo = product.ItemsNo;
  }
  removeFromCart(product: Product): void {
    let index = this.products.findIndex((p) => p.id == product.id);
    alert(this.products[index].ItemsNo);
    this.products[index].ItemsNo = 0;
    alert(this.products[index].ItemsNo);
  }
}
