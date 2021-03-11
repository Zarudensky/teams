import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()

export class GenerateTeemsService {
  public selectedPlayersData: Observable<any[]>;

  constructor(private firestore: AngularFirestore) {
    this.selectedPlayersData = firestore.collection('selected').valueChanges();
  }

}
