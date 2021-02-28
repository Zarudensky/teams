import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

export interface PlayerInfo {
  name: string;
  surname: string;
}

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  public allPlayersData: Observable<any[]>;
  public playersCtrl: FormControl = new FormControl();
  private selectedPlayers = [];
  public ganereteTeams = new Subject();

  constructor(private firestore: AngularFirestore) {
    this.allPlayersData = firestore.collection('players').valueChanges();
  }

  public onDeletePlayerService(index) {
    this.selectedPlayers = this.playersCtrl.value;
    this.selectedPlayers.splice(index,1);
    this.playersCtrl.reset();
    this.playersCtrl.patchValue(this.selectedPlayers);
  }

  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
