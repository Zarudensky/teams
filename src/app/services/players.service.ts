import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from '../entities';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class PlayersService {
  public allPlayersData: Observable<any[]>;
  public selectedPlayersData: Observable<any[]>;
  public allPlayers: PlayerInfo[] = [];
  public selectedPlayers: any;
  public player: PlayerInfo[];
  public playersRef: any;

  public deleteSelectedPlayers = new Subject();

  constructor(
    private firestore: AngularFirestore,
    private authService: AuthService) {
    this.allPlayersData = this.firestore.collection('players', 
    ref => ref.orderBy('sortPopularity', 'asc')).valueChanges();
    this.selectedPlayersData = firestore.collection('selected').valueChanges();
    this.playersRef = firestore.collection('players');
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
        level: player.level,
        sortPosition: player.sortPosition,
        sortPopularity: player.sortPopularity
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

  private getUserSelectedCollection():string {
    let userId: string;
    if(this.authService.admin) {
      return 'selected';
    } else {
      userId = this.authService.userData.uid;
      return `users/${userId}/selected`;
    }
  }
  
  public getSelectedPlayersService(userId) {
    let collection: string;
    if (userId) {
      collection = `users/${userId}/selected`;
    } else {
      collection = `selected`;
    }
    const selectedDoc = this.firestore.collection(collection);
    selectedDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        this.selectedPlayers.push(<PlayerInfo>doc.data());
      });
    });
  }

  public setSelectedPlayerService(player) {
    const collection = this.getUserSelectedCollection();
    const playerDoc = this.firestore.collection(collection).doc(player.id);
    playerDoc.get().toPromise().then(() => {
      playerDoc.set(player);
    });
  }

  public deleteSelectedPlayersService() {
    const collection = this.getUserSelectedCollection();
    const playerDoc = this.firestore.collection<PlayerInfo>(collection);
    playerDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        playerDoc.doc(doc.data().id).delete();
      });
    });
  }

  public updateSelectedPlayersService() {
    this.deleteSelectedPlayersService();
    this.selectedPlayers.forEach((player) => {
      this.setSelectedPlayerService(player);
    });

  }

  public deleteAllSelectedPlayersService() {
    this.deleteSelectedPlayers.next();
    this.selectedPlayers = [];
  }

  public sortByLevelService(results):void {
    this.allPlayersData = this.firestore.collection('players', 
    ref => ref.orderBy('level', results)).valueChanges();
  }

  public sortByPositionService(results):void {
    this.allPlayersData = this.firestore.collection('players', 
    ref => ref.orderBy('sortPosition', results)).valueChanges();
  }

  public sortByPopularityService(results):void {
    this.allPlayersData = this.firestore.collection('players', 
    ref => ref.orderBy('sortPopularity', results)).valueChanges();
  }
}
