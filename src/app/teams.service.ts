import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Player, PLAYERS } from './demo-data';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor() { }

  public ganereteTeams = new Subject();
  public playersCtrl: FormControl = new FormControl();
  public players: Player[] = PLAYERS;
  public filteredPlayers: ReplaySubject<Player[]> = new ReplaySubject<Player[]>(1);

  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
