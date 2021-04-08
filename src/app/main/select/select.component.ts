import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil} from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { PlayersService } from '../../services/players.service';
import { TeamsService } from '../../services/teams.service';
import { PlayerInfo } from '../../entities';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})

export class SelectComponent implements OnInit, AfterViewInit, OnDestroy {
  protected players: PlayerInfo[] = this.playersService.allPlayers;
  public playersCtrl: FormControl = new FormControl();
  public playersFilterCtrl: FormControl = new FormControl();
  public filteredPlayers: ReplaySubject<PlayerInfo[]> = new ReplaySubject<PlayerInfo[]>(1);
  public openedOrClosedSelect: boolean;
  public selectForTeamState: boolean;
  public uniquePlayers: PlayerInfo[] = [];

  @ViewChild('multiSelect') multiSelect: MatSelect;

  protected _onDestroy = new Subject<void>();

  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService) {}

  ngOnInit():void {
    this.playersService.deleteSelectedPlayers.subscribe(() => {
      this.playersCtrl.setValue([]);
      this.playersService.selectedPlayers = [];
    });

    this.teamsService.openSelectForTeam.subscribe(() => {
      this.selectForTeamState = true;
      document.body.classList.add('disabled__checkbox');
      this.multiSelect.open();
    });

    this.setInitialSelection();
    this.loadInitialPlayerList();

    this.playersFilterCtrl.valueChanges
      .pipe(takeUntil(this._onDestroy))
      .subscribe(() => {
        this.filterOptions();
      });
  }

  ngAfterViewInit(): void {
    this.setInitialValue();
  }

  ngOnDestroy(): void {
    this._onDestroy.next();
    this._onDestroy.complete();
  }

  public onSelectForTeam(player): void {
    if (this.selectForTeamState) {
      this.teamsService.setOnePlayerTeamService(player);
      this.multiSelect.close();
      this.multiSelect._onBlur();
    }
  }

  protected setInitialValue(): void {
    this.filteredPlayers
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelect.compareWith = (a: PlayerInfo, b: PlayerInfo) => a && b && a.id === b.id;
      });
  }

  public setInitialSelection(): void {
    this.playersService.selectedPlayersData.subscribe(()=>{
      this.playersCtrl.setValue(this.playersService.selectedPlayers);
    });
  }

  public loadInitialPlayerList(): void {
    this.playersService.allPlayersData.subscribe((players) => {
      this.filteredPlayers.next(players.slice());
    })
  }

  public onSelectedPlayers(players): void {
    this.playersService.selectedPlayers = players;
  }

  public filterOptions(): void {
    if (!this.players) {
      return;
    }

    let search = this.playersFilterCtrl.value;
    if (!search) {
      this.loadInitialPlayerList();
      return;
    } else {
      search = search.trim().toLowerCase();
    }
    this.filteredPlayers.next(
      this.players.filter(player => player.name.toLowerCase().indexOf(search) > -1)
    );
  }

  public onCloseOptions(): void {
    this.multiSelect.close();
  }

  public openedChangeSelect(value): void {
    this.openedOrClosedSelect = value;
    if(value) {
      document.body.classList.add('disabled__scroll');
      this.setInitialValue();
    } else {
      if(!this.selectForTeamState) {
        this.teamsService.generateTeemsService();
      }
      this.selectForTeamState = false;
      document.body.classList.remove('disabled__checkbox');
      document.body.classList.remove('disabled__scroll');
    }
  }
}