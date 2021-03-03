import { Component, OnInit } from '@angular/core';
import { TeamsService, PlayerInfo } from '../../app/teams.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component'

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

  public title: string;
  public content: string;
  public btnYes: string;
  public btnNo: string;
  public status: boolean;

  constructor(
    private teamsService: TeamsService, 
    public dialog: MatDialog
    ) {}

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
    console.log('deletePlayerClic');
    this.openDialog(player);
  }

  public uploadAvatar() {
    console.log('uploadAvatar');
  }

  public openDialog(player) {
    const dialogRef = this.dialog.open(PopupComponent, {
      // width: '300px',
      data: {
        title: `Удалить игрока ${player.name}?`, 
        content: `После подтверждения, игрока ${player.name} востановить будет не возможно!`,
        yes: 'Удалить',
        no: 'Отмена',
        status: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teamsService.deletePlayerService(player);
      }
    });
  }

}