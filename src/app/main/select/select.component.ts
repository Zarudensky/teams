import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
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

export class SelectComponent implements OnInit, AfterViewInit, OnDestroy {
  public players = this.teamsService.players;
  public playersCtrl = this.teamsService.playersCtrl;
  public playersFilterCtrl: FormControl = new FormControl();
  public openedOrClosedSelect: boolean;
  public filteredPlayers: ReplaySubject<PlayerInfo[]> = new ReplaySubject<PlayerInfo[]>(1);
  private _onDestroy = new Subject<void>();

  @ViewChild('multiSelect') multiSelect: MatSelect;

  constructor(private teamsService: TeamsService) {}

  ngOnInit() :void {
    this.setFilteredPlayers();
    this.teamsService.setInitialSelectionService();
    
    this.playersFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterOptions();
      });
  }

  public setFilteredPlayers(): void {
    this.filteredPlayers.next(this.players.slice());
  }

  ngAfterViewInit() {
    this.playersFilterCtrl.valueChanges.subscribe(() => {
      this.selectedPlayers(this.playersCtrl.value, true);
      const notSelectedPlayers = this.players.filter(player => !this.playersCtrl.value.find(obj => player.id === obj.id));
      this.selectedPlayers(notSelectedPlayers, false);
    });
  }

  public selectedPlayers(players, selected) {
    players.forEach((player) => {
      this.teamsService.onSelectedChangeService(player, selected);
    });
  }

  public onSelectedChange(player, selected) {
    this.teamsService.onSelectedChangeService(player, selected);
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
    this.selectedPlayers(this.playersCtrl.value, false);
    this.playersCtrl.reset();
  }

  public closedChangeSelect(value): void {
    this.openedOrClosedSelect = value;
    this.disabledScrollBody();
    this.filteredPlayers.next(this.players.slice());

    if (!value && this.playersCtrl.value) {
      if (this.playersCtrl.value.length > 0) {
        this.teamsService.generateTeemsService();
      }
    }
  }

  public disabledScrollBody() {
    if(this.openedOrClosedSelect) {
      document.body.classList.add('disabled__scroll');
    } else {
      document.body.classList.remove('disabled__scroll');
    }
  }
}