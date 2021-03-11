import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from './entities';

@Injectable({
  providedIn: 'root'
})

export class TeamsService {
  public allPlayersData: Observable<any[]>;
  public selectedPlayersData: Observable<any[]>;
  public allPlayers: PlayerInfo[] = [];
  public player: PlayerInfo[];
  
  public ganereteTeams = new Subject();

  constructor(private firestore: AngularFirestore) {
    this.allPlayersData = firestore.collection('players').valueChanges();
    this.selectedPlayersData = firestore.collection('selected').valueChanges();
    this.getAllPlayersService();
  }

  public saveDataPlayerService(player) {
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

  public deleteDataPlayerService(player) {
    return this.firestore.collection('players')
      .doc(player.id)
      .delete();
  }

  public onSelectedPlayerService(player) {
    const playerDoc = this.firestore.collection('selected').doc(player.id);
    playerDoc.get().toPromise().then((doc) => {
      if (doc.exists) {
        playerDoc.delete()
      } else {
        playerDoc.set(player);
      }
    });
  }

  private getAllPlayersService() {
    const playerDocAll = this.firestore.collection<PlayerInfo>('players');
    playerDocAll.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.allPlayers.push(<PlayerInfo>doc.data()); 
      });
    });
  }

  public deleteAllSelectedPlayersService() {
    const selectedDocAll = this.firestore.collection<PlayerInfo>('selected');
    selectedDocAll.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        selectedDocAll.doc(doc.data().id).delete();
      });
    })
  }

  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
