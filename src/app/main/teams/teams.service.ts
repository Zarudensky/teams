import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class TeamsService {
  public selectedPlayersData: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.selectedPlayersData = firestore.collection('selected').valueChanges();
  }

  public setTeams(teams) {
    console.log('setTeams');
    console.log(teams);
  }

}
