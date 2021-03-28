import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from './entities';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  public allPlayersData: Observable<any[]>;
  public selectedPlayersData: Observable<any[]>;
  public allPlayers: PlayerInfo[] = [];
  public player: PlayerInfo[];

  constructor(private firestore: AngularFirestore) {
    this.allPlayersData = firestore.collection('players').valueChanges();
    this.selectedPlayersData = firestore.collection('selected').valueChanges();
    this.getAllPlayersService();
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

  public onSelectedPlayerService(player) {
    const playerDoc = this.firestore.collection('selected').doc(player.id);
    playerDoc.get().toPromise().then((querySnapshot) => {
      if (querySnapshot.exists) {
        playerDoc.delete();
      } else {
        playerDoc.set(player);
      }
    });
  }

  private getAllPlayersService() {
    const playersDocAll = this.firestore.collection<PlayerInfo>('players');
    playersDocAll.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.allPlayers.push(<PlayerInfo>doc.data()); 
      });
    });
  }

  public deleteSeveralPlayersService(collection) {
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        playersDoc.doc(doc.data().id).delete();
      });
    })
  }
}
