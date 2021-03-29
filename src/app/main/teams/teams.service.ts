import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from '../../entities';
import { PlayersService } from '../../players.service'

@Injectable()

export class TeamsService {
  public firstTeam: PlayerInfo[] = [];
  public secondTeam: PlayerInfo[] = [];
  public thirdTeam: PlayerInfo[] = [];
  public fourthTeam: PlayerInfo[] = [];

  public ganereteTeams = new Subject();

  constructor(
    private firestore: AngularFirestore,
    private playersService: PlayersService) {}

  public getPlayersTeamService(collection) {
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        switch (collection) {
          case 'firstTeam':
            this.firstTeam.push(<PlayerInfo>doc.data());
            break;
          case 'secondTeam':
            this.secondTeam.push(<PlayerInfo>doc.data());
            break;
          case 'thirdTeam':
            this.thirdTeam.push(<PlayerInfo>doc.data());
            break;
          case 'fourthTeam':
            this.fourthTeam.push(<PlayerInfo>doc.data());
            break;
        } 
      });
    });
  }

  public setTeamService(team, collection) {
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        playersDoc.doc(doc.data().id).delete();
      });
      team.forEach(player => {
        this.playersService.saveDataPlayerService(player, collection);
      });
    });
  }

  public deleteTeamService(collection) {
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        playersDoc.doc(doc.data().id).delete();
      });
    });
  }
  
  public generateTeemsService() {
    this.ganereteTeams.next();
  }
}
