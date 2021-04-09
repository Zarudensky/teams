import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { PlayersService } from '../services/players.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component'
import { Observable } from 'rxjs';
import { PlayerInfo } from '../entities';
import { TranslateService } from '@ngx-translate/core';
import { TeamsService } from '../services/teams.service';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit, AfterViewInit {
  public allPlayersData = this.playersService.allPlayersData;
  public showOrHideForm = false;
  public displayedColumns: string[] = ['actions', 'avatar', 'name', 'surname', 'power', 'status', 'position', 'attack', 'defense', 'accuracy', 'cc', 'level', 'sortPosition', 'sortPopularity'];
  public dataSource = new MatTableDataSource([]);
  public player: PlayerInfo;

  public title: string;
  public content: string;
  public btnYes: string;
  public btnNo: string;
  public status: boolean;

  public avatarUrl: Observable<string | null>;

  @ViewChild(MatSort) sort: MatSort;

  constructor(
    private translateService: TranslateService,
    private playersService: PlayersService,
    public teamsService: TeamsService,
    public dialog: MatDialog) {}

  ngOnInit():void {
    // this.allPlayersData.subscribe((players) => {
    //   this.allPlayersData = players;
    // }) 
  }

  ngAfterViewInit():void {
    // this.dataSource.sort = this.sort;
  }

  public openForm() {
    this.showForm();
  }

  public showForm() {
    this.showOrHideForm = true;
  }

  public chengePlayerClic(player) {
    this.teamsService.scrollToTopService();
    this.showForm();
    this.playersService.player = player;
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
        this.playersService.deleteOnePlayerService(player, 'players');
      }
    });
  }

  public onSortByLevel():void {
    this.playersService.sortByLevelService('desc');
    this.allPlayersData = this.playersService.allPlayersData;
  }

  public onSortByPosition():void {
    this.playersService.sortByPositionService('asc');
    this.allPlayersData = this.playersService.allPlayersData;
  }

  public onSortByPopularity():void {
    this.playersService.sortByPopularityService('asc');
    this.allPlayersData = this.playersService.allPlayersData;
  }
}