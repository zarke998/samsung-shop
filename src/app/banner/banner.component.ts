import { Component, Input, OnInit } from '@angular/core';
import { fadeSlide } from '../animations';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  animations: [
    fadeSlide
  ]
})
export class BannerComponent implements OnInit {

  @Input() image : string = "";

  constructor() { }

  ngOnInit(): void {
    
  }

}
