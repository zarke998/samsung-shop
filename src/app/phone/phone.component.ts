import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit {

  relatedPhones : any[] = [];

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(
      response => {
        let result = response as Array<any>;
        for (let i = 0; i < 5; i++) {
          let randomIndex = Math.floor(Math.random() * result.length);
          this.relatedPhones.push(result[randomIndex]);
        }
      },
      error => {
        console.log(error);
      }
    )
  }
  
  redirectContact(){
    this.router.navigate(["/contact"]);
  }

}
