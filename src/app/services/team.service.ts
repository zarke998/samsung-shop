import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class TeamService {

  constructor(private httpClient : HttpClient) { }

  getTeam()
  {
    return this.httpClient.get("http://localhost:4200/assets/data/team.json");
  }
}
