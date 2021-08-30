import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { MenuService } from '../services/menu-service/menu.service';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {

  @Input() logoImage : string = "";
  menuItems : any;
  
  constructor(private menuService : MenuService) { }

  ngOnInit(): void {
    this.menuService.getMenu().subscribe(
      response => {
        this.menuItems = response;
      },
      error => {
        console.log(error);
      }
    )
  }

}
