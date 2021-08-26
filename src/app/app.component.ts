import { Component } from '@angular/core';
import { MenuItem } from './menu-item/menu-item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  menu : MenuItem[] = [{ name: "2", link: "2"}]
  logo : string = "assets/images/logo.png";
}