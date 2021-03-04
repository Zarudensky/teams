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

  public selectedFile: File = null;

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

  public openDialog(player) {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: `Удалить игрока ${player.name}?`, 
        content: "Это действие приведет к удалению из базы данных всей информации об игроке.",
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

  // public onFileSelected(event) {
  //   console.log('onFileSelected');
  //   this.selectedFile = <File>event.target.files[0];
  //   console.log(event);
  // }

  // public onUpload() {
  //   console.log('onUpload');
  // }

}