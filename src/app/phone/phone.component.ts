import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProductService } from '../services/product-service/product.service';

@Component({
  selector: 'app-phone',
  templateUrl: './phone.component.html',
  styleUrls: ['./phone.component.scss']
})
export class PhoneComponent implements OnInit, OnDestroy {
  id : number = 0;
  paramsSubscription! : Subscription;

  name : string = "Phone name";
  description : string = "Phone description"
  colors : any[] = [];
  specifications : any[] = [];
  image : string = "";

  relatedPhones : any[] = [];

  constructor(private productService : ProductService, 
              private router : Router, 
              private route : ActivatedRoute) { }


  async ngOnInit(): Promise<void> {
    this.id = this.route.snapshot.params["id"];
    this.paramsSubscription = this.route.params.subscribe(
      (params : Params) => {
        this.id = params["id"];
        this.loadPhone(this.id);
      }
    );
    await this.loadPhone(this.id);
  }

  async loadPhone(id : number) {
    let product = await this.productService.getProduct(id);

    this.name = product.name;
    this.description = product.description;
    this.colors = product.colors;
    this.specifications = product.specifications;
    this.image = product.image;
  }

  private loadRelatedPhones() {
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
    );
  }

  redirectContact(){
    this.router.navigate(["/contact"]);
  }

  ngOnDestroy(): void {
    this.paramsSubscription.unsubscribe();
  }
}
