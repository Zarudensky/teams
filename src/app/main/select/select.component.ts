import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { MatSelect } from '@angular/material/select';
import { FormControl } from '@angular/forms';
import { TeamsService, PlayerInfo } from '../../teams.service';
import { ReplaySubject, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit, OnDestroy {
  public allPlayersData = this.teamsService.allPlayersData;
  public playersCtrl = this.teamsService.playersCtrl;
  public playersFilterCtrl: FormControl = new FormControl();
  public openedOrClosedSelect: boolean;
  public players: PlayerInfo[] = [];
  public filteredPlayers: ReplaySubject<PlayerInfo[]> = new ReplaySubject<PlayerInfo[]>(1);
  private _onDestroy = new Subject<void>();

  @ViewChild('multiSelect') multiSelect: MatSelect;

  constructor(private teamsService: TeamsService) {}

  ngOnInit() :void {
    this.getPlayers();

    this.playersFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterOptions();
      });
  }

  public getPlayers(): void {
    this.allPlayersData.subscribe((results) => {
      this.players = results;
    });

    this.filteredPlayers.next(this.players.slice());
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  public filterOptions(): void {
    if (!this.players) {
      return;
    }

    let searchValue = this.playersFilterCtrl.value;

    if (!searchValue) {
      this.filteredPlayers.next(this.players.slice());
      return;
    } else {
      searchValue = searchValue.toLowerCase();
    }

    this.filteredPlayers.next(
      this.players.filter(player => player.name.toLowerCase().indexOf(searchValue) > -1)
    );
  }

  public onCloseOptions(): void {
    this.multiSelect.close();
  }

  public onResetForm(): void {
    this.playersCtrl.reset();
  }

  public closedChangeSelect(value): void {
    this.openedOrClosedSelect = value;

    this.filteredPlayers.next(this.players.slice());

    if (!value && this.playersCtrl.value) {
      if (this.playersCtrl.value.length > 0) {
        this.teamsService.generateTeemsService();
      }
    }
  }
}