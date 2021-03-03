import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';

export interface PlayerInfo {
  id: string;
  avatar: string;
  name: string;
  surname: string;
  power: string;
  status: string;
  position: string;
  attack: number;
  defense: number;
  accuracy: number;
  cc: number;
  level: number;
}

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  public allPlayersData: Observable<any[]>;
  public players: PlayerInfo[] = [];
  public player: PlayerInfo[];
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
    console.log(player);
    return this.firestore.collection('players')
      .doc(player.id)
      .set({
        id: player.id,
        avatar: player.avatar,
        name: player.name, 
        surname: player.surname, 
        power: player.power,
        status: player.status,
        position: player.position, 
        attack: player.attack, 
        defense: player.defense, 
        accuracy: player.accuracy, 
        cc: player.cc, 
        level: player.level
      }, { merge: true });
  }

  public deletePlayerService(player) {
    return this.firestore.collection('players')
      .doc(player.id)
      .delete();
  }

  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
