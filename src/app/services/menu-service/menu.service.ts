import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient : HttpClient) { }

  getMenu(){
    return this.httpClient.get(`${window.location.origin}/assets/data/menu.json`);
  }
}
