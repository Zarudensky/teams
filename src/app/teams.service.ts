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
  selected: boolean;
}

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  public allPlayersData: Observable<any[]>;
  public players = [];
  public player: PlayerInfo[];
  public playersCtrl: FormControl = new FormControl();
  public ganereteTeams = new Subject();
  public deleteOldAvatarService = new Subject();

  public fileUrl: Observable<string | null>;

  constructor(private firestore: AngularFirestore) {
    this.allPlayersData = firestore.collection('players').valueChanges();
    firestore.collection('players').get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.players.push(doc.data());
      });
  });
  }

  public savePlayerService(player) {
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
        level: player.level,
        selected: player.selected
      }, { merge: true });
  }

  public deletePlayerService(player) {
    this.deleteOldAvatarService.next();
    return this.firestore.collection('players')
      .doc(player.id)
      .delete();
  }

  public onSelectedChangeService(player, selected) {
    return this.firestore.collection('players')
      .doc(player.id)
      .set({ selected: selected }, { merge: true });
  }

  public setInitialSelectionService() {
    const selectedPlayers: PlayerInfo[] = [];
    this.allPlayersData.subscribe(() => {
      this.players.forEach((player) => {
        if (player.selected) {
          selectedPlayers.push(player);
        }
      });
    });
    this.playersCtrl.setValue(selectedPlayers);
  }

  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
