import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private httpClient : HttpClient) { }

  getProducts()
  {
      return this.httpClient.get(`${window.location.origin}/assets/data/products.json`);
  }

  async getProduct(id : number){
    let products = await this.httpClient.get(`${window.location.origin}/assets/data/products.json`).toPromise() as Array<any>;
    let product = products.find(p => p.id == id);

    console.log(product);
    return product;
  }
}
