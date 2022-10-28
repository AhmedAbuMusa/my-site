import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {
    //alert('');
  }

  ngOnInit(): void {
    //alert(this.products.length);
    //if (this.products.length == 0)
      //this.products = this.productService.getProducts();
    this.products =  this.productService.getProducts();
    // this.productService.getProducts().subscribe((res) => {

    //   this.products = res;
    //   alert(res);
    // });
  }
}
