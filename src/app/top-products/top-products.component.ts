import { Component, Input, OnInit } from '@angular/core';
import { fade } from '../animations';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss'],
  animations: [
    fade
  ]
})
export class TopProductsComponent implements OnInit {

  topProducts : any;

  constructor(private productService : ProductService) { }

  ngOnInit() {

    this.productService.getProducts().subscribe(
      response => {
        this.topProducts = (response as Array<any>).slice(0, 4);
      },
      error => {
        console.log(error);
      }
    );    
  }
}
