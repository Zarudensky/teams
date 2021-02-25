import { Injectable } from '@angular/core';
import { ReplaySubject, Subject } from 'rxjs';
import { FormControl } from '@angular/forms';
import { Player, PLAYERS } from './demo-data';

import { AngularFirestore } from '@angular/fire/firestore';

import { firebase } from '@firebase/app';
import '@firebase/database';

@Injectable({
  providedIn: 'root'
})

export class TeamsService {

  constructor(private firestore: AngularFirestore) { }

  public database = firebase.database();
  public reference = firebase.database().app;
  public reference2 = firebase.database().ref().child('\players');
  // public docRef = db.collection("players").doc("SF");

  public ganereteTeams = new Subject();

  public playersCtrl: FormControl = new FormControl();
  public playersFilterCtrl: FormControl = new FormControl();

  public players: Player[] = PLAYERS;
  public filteredPlayers: ReplaySubject<Player[]> = new ReplaySubject<Player[]>(1);
  public selectedPlayers = [];

  public generateTeemsService() {
    this.ganereteTeams.next();
  }

  public onDeletePlayerService(index, selectedPlayers) {
    this.selectedPlayers = selectedPlayers;
    this.selectedPlayers.splice(index,1);
    this.playersCtrl.reset();
    this.playersCtrl.patchValue(this.selectedPlayers);
  }

  public getpPlayers() {
    console.log('getUsers');
    console.log(this.database);
    console.log(this.reference);
    console.log(this.reference2);
    console.log(this.firestore.collection('/players').snapshotChanges());


    // database.collection('/players').get().then((querySnapshot) => {
    //   querySnapshot.forEach((doc) => {
    //       // doc.data() is never undefined for query doc snapshots
    //       console.log(doc.id, " => ", doc.data());
    //   });
    // });
    // return this.firestore.collection('players').snapshotChanges();
    // return new Promise<any>((resolve, reject) => {
    //   this.afs.collection('/players').snapshotChanges()
    //   .subscribe(snapshots => {
    //     resolve(snapshots)
    //   })
    // })
  }
}
