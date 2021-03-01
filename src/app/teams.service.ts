import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

export interface PlayerInfo {
  id: string;
  name: string;
  surname: string;
  power: string; // супер сила
  position: string; // позиция
  attack: number; // атака
  defense: number; // защита
  accuracy: number; // меткость
  cc: number; // кк
  level: number; // уровень
  avatar: string;
}

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  public allPlayersData: Observable<any[]>;
  public players: PlayerInfo[] = [];
  public playersCtrl: FormControl = new FormControl();
  private selectedPlayers = [];
  public ganereteTeams = new Subject();

  constructor(private firestore: AngularFirestore) {
    this.allPlayersData = firestore.collection('players').valueChanges();
  }

  public onDeletePlayerTeamsService(index) {
    this.selectedPlayers = this.playersCtrl.value;
    this.selectedPlayers.splice(index,1);
    this.playersCtrl.reset();
    this.playersCtrl.patchValue(this.selectedPlayers);
  }

  public savePlayerService(player) {
    console.log('savePlayerService');
    console.log(player);

    // return this.firestore.collection('players')
    //   .doc('pTest')
    //   .set({ surname: 'SurnameUpdate' }, { merge: true });
  }

  public deletePlayerService(player) {
    console.log('deletePlayerService');
    console.log(player);

    // return this.firestore.collection('players')
    //   .doc('pTest')
    //   .delete();
  }

  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
