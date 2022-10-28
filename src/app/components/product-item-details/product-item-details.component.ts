import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-item-details',
  templateUrl: './product-item-details.component.html',
  styleUrls: ['./product-item-details.component.css'],
})
export class ProductItemDetailsComponent implements OnInit {
  @Output() addToCartEvent: EventEmitter<any> = new EventEmitter();
  productItemsNo: number = 0;
  product: Product = {
    id: 1,
    name: '',
    price: 0.0,
    url: '',
    description: '',
    ItemsNo: 0,
  };
  productId: any = '0';
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.productId = this.route.snapshot.paramMap.get('id');
    this.product = this.productService.getProduct(this.productId);
    //alert(this.product.name);
  }

  ngOnInit(): void {
    //alert(this.productId);
  }

  addToCart() {
    this.productService.addToCart(this.product);
    alert('Added to cart!')
    // this.addToCartEvent.emit(this.product);
  }
}
