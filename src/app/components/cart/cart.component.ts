import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  products: Product[] = [];
  total: number = 0;
  userName:string='Ahmed';
  Address:string='Aljizah';
  cardNo:string='1234567891011121';

  constructor(private productService: ProductService, private router: Router) {}
  submitForm() {
    //alert();
    this.products = [];
    this.productService.clearCart();
    this.router.navigate(['/confirmation'], {queryParams: { userName: this.userName,orderValue: this.total.toString() }});
   
  }

  ngOnInit(): void {
    this.products = this.productService.getProductsInCart();
      this.recalculate();
  }

  recalculate()
  {
    //alert("Cart");
    this.total = 0;
    this.products.forEach((element) => {
      this.total += element.price * element.ItemsNo;
    });
  }

  removeCartItem(product:Product) {
    this.productService.removeFromCart(product);
    this.products = this.productService.getProductsInCart();
    this.recalculate();
  }
}
