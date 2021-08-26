import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Input() logoImage : string = "";
  @Input() menuItems : MenuItem[] = [];
  
  constructor() { }

  ngOnInit(): void {

  }

}
