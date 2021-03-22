import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild  } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ReplaySubject, Subject } from 'rxjs';
import { take, takeUntil} from 'rxjs/operators';
import { MatSelect } from '@angular/material/select';
import { PlayersService } from '../../players.service';
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

  @ViewChild('multiSelect') multiSelect: MatSelect;

  protected _onDestroy = new Subject<void>();

  constructor(private playersService: PlayersService) {}

  ngOnInit():void {
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

  protected setInitialValue(): void {
    this.filteredPlayers
      .pipe(take(1), takeUntil(this._onDestroy))
      .subscribe(() => {
        this.multiSelect.compareWith = (a: PlayerInfo, b: PlayerInfo) => a && b && a.id === b.id;
      });
  }

  public setInitialSelection(): void {
    this.playersService.selectedPlayersData.subscribe((players) => {
      this.playersCtrl.setValue(players);
    })
  }

  public loadInitialPlayerList(): void {
    this.playersService.allPlayersData.subscribe((players) => {
      this.filteredPlayers.next(players.slice());
    })
  }

  public onSelectedPlayer(player): void {
    this.playersService.onSelectedPlayerService(player);
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
    this.disabledScrollBody();

    if (!value && this.playersCtrl.value) {
      if (this.playersCtrl.value.length > 0) {
        this.playersService.generateTeemsService();
      }
    }
  }

  public disabledScrollBody(): void {
    if(this.openedOrClosedSelect) {
      document.body.classList.add('disabled__scroll');
    } else {
      document.body.classList.remove('disabled__scroll');
    }
  }
}