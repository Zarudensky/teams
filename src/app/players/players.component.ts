import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../app/teams.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  public allPlayersData = this.teamsService.allPlayersData;

  constructor( 
    private teamsService: TeamsService, 
    private firestore: AngularFirestore
    ) {}

  ngOnInit():void {}

  public addPlayer() {
    console.log('addPlayer');
    return this.firestore.collection('players')
      .doc('pTest')
      .set({ name: 'TestName', surname: 'TestSurname' }, { merge: true });
  }

  public deletePlayer(index) {
    console.log('deletePlayer - ' + index);
    return this.firestore.collection('players')
      .doc('pTest')
      .delete();
  }

  public updatePlayer(index) {
    console.log('updatePlayer - ' + index);
    return this.firestore.collection('players')
      .doc('pTest')
      .set({ surname: 'SurnameUpdate' }, { merge: true });
  }
}