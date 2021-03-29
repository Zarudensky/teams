import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from './entities';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  public allPlayersData: Observable<any[]>;
  public selectedPlayersData: Observable<any[]>;
  public allPlayers: PlayerInfo[] = [];
  public selectedPlayers: PlayerInfo[] = [];
  public player: PlayerInfo[];
  public playersDocSelected = this.firestore.collection<PlayerInfo>('selected');

  public deleteSelectedPlayers = new Subject();

  constructor(private firestore: AngularFirestore) {
    this.allPlayersData = firestore.collection('players').valueChanges();
    this.selectedPlayersData = firestore.collection('selected').valueChanges();
  }

  public saveDataPlayerService(player, collection) {
    return this.firestore.collection(collection)
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

  public deleteOnePlayerService(player, collection) {
    return this.firestore.collection(collection)
      .doc(player.id)
      .delete();
  }

  private getAllPlayersService() {
    const playersDocAll = this.firestore.collection<PlayerInfo>('players');
    playersDocAll.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.allPlayers.push(<PlayerInfo>doc.data()); 
      });
    });
  }

  public getSelectedPlayersService() {
    this.playersDocSelected.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.selectedPlayers.push(<PlayerInfo>doc.data());
      });
    });
  }

  public setSelectedPlayerService(player) {
    const playerDoc = this.playersDocSelected.doc(player.id);
    playerDoc.get().toPromise().then((querySnapshot) => {
      playerDoc.set(player);
    });
  }

  public deleteSelectedPlayersService() {
    this.playersDocSelected.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.playersDocSelected.doc(doc.data().id).delete();
      });
    });
    this.deleteSelectedPlayers.next();
  }

  public updateSelectedPlayersService() {
    if(this.selectedPlayers.length >= 1) {
      this.deleteSelectedPlayersService();
      this.selectedPlayers.forEach((player) => {
        this.setSelectedPlayerService(player);
      });
    }
  }
}
