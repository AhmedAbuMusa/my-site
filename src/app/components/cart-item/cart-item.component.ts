import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css'],
})
export class CartItemComponent implements OnInit {
  @Output() recalculateEvent: EventEmitter<any> = new EventEmitter();
  @Output() removeCartItemEvent: EventEmitter<Product> = new EventEmitter();
  @Input() product: Product;
  constructor(private productService: ProductService) {
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
  recalculate() {
    //alert("Cart-item");
    this.recalculateEvent.emit();
  }
  removeCartItem() {
    this.removeCartItemEvent.emit(this.product);
  }
}
