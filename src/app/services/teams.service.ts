import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from '../entities';
import { PlayersService } from './players.service';
import { AuthService } from './auth.service';

@Injectable()

export class TeamsService {
  public firstTeam: PlayerInfo[] = [];
  public secondTeam: PlayerInfo[] = [];
  public thirdTeam: PlayerInfo[] = [];
  public fourthTeam: PlayerInfo[] = [];

  public genereteTeams = new Subject();
  public deletePlayerTeams = new Subject();

  constructor(
    private firestore: AngularFirestore,
    private playersService: PlayersService,
    private authService: AuthService) {}

  public getPlayersTeamService(nameTeam, userId) {
    let collection: string;
    if (userId) {
      collection = `users/${userId}/${nameTeam}`;
    } else {
      collection = nameTeam;
    }
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        switch (nameTeam) {
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

  private getUserCollection(nameTeam):string {
    let userId: string;
    if(this.authService.admin) {
      return nameTeam;
    } else {
      userId = this.authService.userData.uid;
      return `users/${userId}/${nameTeam}`;
    }
  }

  public setTeamService(team, nameTeam) {
    const collection = this.getUserCollection(nameTeam);
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

  public deleteTeamService(nameTeam) {
    const collection = this.getUserCollection(nameTeam);
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        playersDoc.doc(doc.data().id).delete();
      });
    });
  }

  public clearAllTeemsService() {
    this.firstTeam = [];
    this.secondTeam = [];
    this.thirdTeam = [];
    this.fourthTeam = [];
  }
  
  public generateTeemsService() {
    this.genereteTeams.next();
  }
  public deletePlayerTeamsService(player) {
    this.deletePlayerTeams.next(player);
  }
}
