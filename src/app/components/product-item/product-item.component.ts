import { Component, OnInit,Input,Output } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css'],
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  productItemsNo:number=0;
  constructor() {
    this.product = {
      id: 1,
      name: '',
      price: 0.0,
      url: '',
      description: '',
      ItemsNo: 0,
    };
  }

  ngOnInit(): void {}

  addToCart() {
    this.product.ItemsNo = this.productItemsNo;
    alert('Added to cart!')
  }
}
