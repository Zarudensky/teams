import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { TeamsService } from '../../app/teams.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})

export class FilterComponent implements OnInit, AfterViewInit, OnDestroy {
  /** list of players */
  private players = this.teamsService.players;

  /** control for the selected player for multi-selection */
  public playersCtrl = this.teamsService.playersCtrl;

  /** control for the MatSelect filter keyword multi-selection */
  public playersFilterCtrl: FormControl = new FormControl();

  /** list of players filtered by search keyword */
  public filteredPlayers = this.teamsService.filteredPlayers;

  @ViewChild('multiSelect') multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  private _onDestroy = new Subject<void>();

  constructor(private teamsService: TeamsService) { }

  ngOnInit() {
    // set initial selection
    // this.playersCtrl.setValue([this.players[10], this.players[11], this.players[12]]);

    // load the initial player list
    this.filteredPlayers.next(this.players.slice());

    // listen for search field value changes
    this.playersFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterPlayers();
      });
  }

  ngAfterViewInit() {
    this.setInitialValue();
  }

  ngOnDestroy() {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  /**
   * Sets the initial value after the filteredPlayers are loaded initially
   */
  private setInitialValue() {
    this.filteredPlayers
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredPlayers are loaded initially
        // and after the mat-option elements are available
        // this.multiSelect.compareWith = (a: Player, b: Player) => a && b && a.id === b.id;
      });
  }

  private filterPlayers() {
    if (!this.players) {
      return;
    }
    // get the search keyword
    let search = this.playersFilterCtrl.value;
    if (!search) {
      this.filteredPlayers.next(this.players.slice());
      return;
    } else {
      search = search.toLowerCase();
    }
    // filter the players
    this.filteredPlayers.next(
      this.players.filter(player => player.name.toLowerCase().indexOf(search) > -1)
    );
    console.log(this.playersFilterCtrl.value);
  }

  public onCloseOptions() {
    this.multiSelect.close();
  }

  public onResetForm() {
    this.playersCtrl.reset();
  }

  public closedChangeSelect(value) {
    if (!value && this.playersCtrl.value) {
      if (this.playersCtrl.value.length > 0) {
        this.teamsService.generateTeemsService();
      }
    }
  }
}

