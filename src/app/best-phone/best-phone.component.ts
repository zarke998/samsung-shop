import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-best-phone',
  templateUrl: './best-phone.component.html',
  styleUrls: ['./best-phone.component.scss']
})
export class BestPhoneComponent implements OnInit {

  @Input() image : string = "";
  name : string = "Phone name";
  description : string = "Phone description";

  constructor(private productService : ProductService) {     
  }

  ngOnInit(): void {    
    this.productService.getProducts().subscribe(
      response => {
        let topProduct = (response as Array<any>)[0];
        
        this.name = topProduct.name;
        this.description = topProduct.description;
      }
    )
  }

}
