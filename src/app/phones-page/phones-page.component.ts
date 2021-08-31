import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  allProducts : any;

  constructor(private productsService : ProductService) { }

  ngOnInit(): void {
    this.productsService.getProducts().subscribe(
      response => {
        this.allProducts = response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
