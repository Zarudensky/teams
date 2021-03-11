import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../app/teams.service';
import { PlayerInfo } from '../../entities';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public selectedPlayersData = this.teamsService.selectedPlayersData;
  public selectedPlayers: PlayerInfo[] = [];

  constructor(private teamsService: TeamsService) {
    this.teamsService.selectedPlayersData.subscribe((players) => {
      this.selectedPlayers = players;
    })
  }

  ngOnInit(): void {
    this.teamsService.ganereteTeams.subscribe(() => {
      console.log('ganereteTeams - TeamsComponent');
    });
  }
}
