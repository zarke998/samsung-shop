import { Component, Input, OnInit } from '@angular/core';
import { fade } from '../animations';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss'],
  animations: [
    fade
  ]
})
export class TopProductsComponent implements OnInit {

  products : string[] = ["assets/images/samsung1.png", "assets/images/samsung1.png", "assets/images/samsung1.png", "assets/images/samsung1.png"];

  constructor() { }

  ngOnInit(): void {

  }

}
