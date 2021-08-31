import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-list',
  templateUrl: './phone-list.component.html',
  styleUrls: ['./phone-list.component.scss']
})
export class PhoneListComponent implements OnInit {

  @Input() products : any;
  @Input() flexAlignement : string = "space-around";
  @Input() displayColors : boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

}