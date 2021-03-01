import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../app/teams.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {

  public playersCtrl = this.teamsService.playersCtrl;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamsService.ganereteTeams.subscribe(() => {
      console.log('ganereteTeams - TeamsComponent');
    });
  }
}
