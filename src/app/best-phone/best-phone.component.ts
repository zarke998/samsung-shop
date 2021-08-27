import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-best-phone',
  templateUrl: './best-phone.component.html',
  styleUrls: ['./best-phone.component.scss']
})
export class BestPhoneComponent implements OnInit {

  @Input() image : string = "";

  constructor() { }

  ngOnInit(): void {
  }

}
