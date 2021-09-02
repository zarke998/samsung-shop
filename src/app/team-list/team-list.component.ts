import { Component, Input, OnInit } from '@angular/core';
import { TeamService } from '../services/team-list-service/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teamMembers : any;
  @Input() spacingTop : string = "8%";

  constructor(private teamService : TeamService) { }

  ngOnInit(): void {
    this.teamService.getTeam().subscribe(
      response => {
        this.teamMembers = response;
      },
      error => {
        console.log(error);
      }
    )
  }

  disableSelf(event : any){
    event.preventDefault();
  }
}