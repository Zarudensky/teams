import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil } from 'rxjs/operators';

import { Player, PLAYERS } from './demo-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit, OnDestroy {
  /** list of players */
  protected players: Player[] = PLAYERS;

  /** control for the selected player for multi-selection */
  public playersCtrl: FormControl = new FormControl();

  /** control for the MatSelect filter keyword multi-selection */
  public playersFilterCtrl: FormControl = new FormControl();

  /** list of players filtered by search keyword */
  public filteredPlayers: ReplaySubject<Player[]> = new ReplaySubject<Player[]>(1);

  @ViewChild('multiSelect') multiSelect: MatSelect;

  /** Subject that emits when the component has been destroyed. */
  protected _onDestroy = new Subject<void>();


  constructor() { }

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
  protected setInitialValue() {
    this.filteredPlayers
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        // setting the compareWith property to a comparison function
        // triggers initializing the selection according to the initial value of
        // the form control (i.e. _initializeSelection())
        // this needs to be done after the filteredPlayers are loaded initially
        // and after the mat-option elements are available
        this.multiSelect.compareWith = (a: Player, b: Player) => a && b && a.id === b.id;
      });
  }

  protected filterPlayers() {
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
  }

  public onCloseOptions() {
    this.multiSelect.close();
  }

}
