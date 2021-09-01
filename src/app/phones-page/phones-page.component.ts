import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-phones-page',
  templateUrl: './phones-page.component.html',
  styleUrls: ['./phones-page.component.scss']
})
export class PhonesPageComponent implements OnInit {
  allProducts : any[] = [];
  colors : any[] = [];

  constructor(private productsService : ProductService) { }

  ngOnInit(): void {
    this.loadProducts();

    this.loadColors();
  }

  loadProducts(colorName : string = ""){
    this.productsService.getProducts().subscribe(
      response => {
        this.allProducts = <Array<any>>response;

        if(colorName != "")
        {
          this.allProducts = this.allProducts.filter(p => (p.colors as any[]).some(c => c.name === colorName));
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  loadColors(){
    this.productsService.getProducts().subscribe(
      response => {
        let products : any = response;

        for(let p of products)
        {
          for(let color of p.colors)
          {
            if(!this.colors.some(e => e.name === color.name)){
              this.colors.push(color);
            }
          }
        }
      },
      error => {
        console.log(error);
      }
    )
  }

  sortChange(event : any){
    let value = event.target.value;
    console.log(value);

    if(value == "-1"){
      this.loadProducts();
      return;
    }

    this.loadProducts(value);
  }

}
