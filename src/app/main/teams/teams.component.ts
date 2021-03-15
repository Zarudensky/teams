import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../app/teams.service';
import { GenerateTeemsService } from './generateTeems.service';
import { PlayerInfo } from '../../entities';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public selectedPlayersData = this.teamsService.selectedPlayersData;
  public selectedPlayers: PlayerInfo[] = [];
  public nameClassTeams: string;
  public numberOfPlayers: number;

  constructor(
    private teamsService: TeamsService,
    private generateTeemsService: GenerateTeemsService
    ) {
    this.teamsService.selectedPlayersData.subscribe((players) => {
      this.selectedPlayers = players;
      this.numberOfPlayers = this.selectedPlayers.length;
    })
  }

  ngOnInit(): void {
    this.teamsService.ganereteTeams.subscribe(() => {
      console.log('ganereteTeams - TeamsComponent');
      // if teams were generate, add new players in teams and display massage about it
      console.log(this.selectedPlayers);
      let attackPlsArr = this.selectedPlayers.filter(obj => {
        return obj.position === 'Атакующий'
      })
      console.log(attackPlsArr);
      this.countNumberOfTeams();
    });
  }

  public countNumberOfTeams(): void {
    console.log('countNumberOfTeams');
    switch (true) {
      case this.numberOfPlayers >= 8 && this.numberOfPlayers <= 11:
        this.nameClassTeams = 'two__teams';
        break;
      case this.numberOfPlayers >= 12 && this.numberOfPlayers <= 15:
        this.nameClassTeams = 'three__teams';
        break;
      case this.numberOfPlayers >= 16:
        this.nameClassTeams = 'four__teams';
        break;
      default:
        this.nameClassTeams = '';
    }
  }

  public onDivideTeams(): void {
    console.log('onDivideTeams');
  }

  public deleteAllSelectedPlayers(): void {
    this.teamsService.deleteAllSelectedPlayersService();
  }
}
