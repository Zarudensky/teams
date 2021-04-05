import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public teamLevel: number;
  
  @Input() team: any;
  @Input() index: any;

  constructor(public teamsService: TeamsService) {}

  ngOnInit(): void {
    this.teamLevel = this.team.reduce((sum, player) => sum + player.level,0);
  }
}
