import { Component } from '@angular/core';
import { TeamsService } from '../../app/teams.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component'
import { Observable } from 'rxjs';
import { PlayerInfo } from '../entities';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent {
  public allPlayersData = this.teamsService.allPlayersData;
  public showOrHideForm = false;
  public displayedColumns: string[] = ['actions', 'avatar', 'name', 'surname', 'power', 'status', 'position', 'attack', 'defense', 'accuracy', 'cc', 'level'];

  public player: PlayerInfo[];

  public title: string;
  public content: string;
  public btnYes: string;
  public btnNo: string;
  public status: boolean;

  public avatarUrl: Observable<string | null>;

  constructor(
    private translateService: TranslateService,
    private teamsService: TeamsService, 
    public dialog: MatDialog) {}

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
    this.openDialog(player);
  }

  public openDialog(player) {
    const dialogRef = this.dialog.open(PopupComponent, {
      data: {
        title: this.translateService.instant('players.dialog.title')+" "+player.name+"?", 
        content: this.translateService.instant('players.dialog.content'),
        yes: this.translateService.instant('players.dialog.yes'),
        no: this.translateService.instant('players.dialog.no'),
        status: true
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.teamsService.deleteDataPlayerService(player);
      }
    });
  }
}