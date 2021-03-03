import { Component, OnInit } from '@angular/core';
import { TeamsService, PlayerInfo } from '../../app/teams.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit {
  public allPlayersData = this.teamsService.allPlayersData;
  public showOrHideForm = false;
  public displayedColumns: string[] = ['actions', 'avatar', 'name', 'surname', 'power', 'status', 'position', 'attack', 'defense', 'accuracy', 'cc', 'level'];

  public player: PlayerInfo[];

  constructor(private teamsService: TeamsService) {}

  ngOnInit():void {
  }

  public openForm() {
    this.showForm();
  }
  public showForm() {
    this.showOrHideForm = true;
  }

  public chengePlayerClic(player) {
    this.showForm();
    this.teamsService.player = player;
  }

  public deletePlayerClic(player) {
    console.log('deletePlayerClic and open popup');
    this.teamsService.deletePlayerService(player);
  }

  public uploadAvatar() {
    console.log('uploadAvatar');
  }
}