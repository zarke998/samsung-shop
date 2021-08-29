import { Component, OnInit } from '@angular/core';
import { TeamService } from '../services/team.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  teamMembers : any;

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
}