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
  public teamIndex: number;

  public genereteTeams = new Subject();
  public deletePlayerTeams = new Subject();
  public openSelectForTeam = new Subject();
  public scrollToTop = new Subject();
  public setOnePlayerTeam = new Subject();
  public setPlayerAllList = new Subject();

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
      this.sortPlayersByPositionService(this.firstTeam);
      this.sortPlayersByPositionService(this.secondTeam);
      this.sortPlayersByPositionService(this.thirdTeam);
      this.sortPlayersByPositionService(this.fourthTeam);
    });
  }
  public sortPlayersByPositionService(nameTeam):void {
    nameTeam.sort((a, b) => {
      if (a.sortPosition < b.sortPosition) return -1;
      else if (a.sortPosition > b.sortPosition) return 1;
      else return 0;
    });
  }

  private getUserCollectionService(nameTeam):string {
    let userId: string;
    if(this.authService.admin) {
      return nameTeam;
    } else {
      userId = this.authService.userData.uid;
      return `users/${userId}/${nameTeam}`;
    }
  }

  public setTeamService(team, nameTeam) {
    const collection = this.getUserCollectionService(nameTeam);
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
    const collection = this.getUserCollectionService(nameTeam);
    const playersDoc = this.firestore.collection<PlayerInfo>(collection);
    playersDoc.get().toPromise().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        playersDoc.doc(doc.data().id).delete();
      });
    });
  }

  public generateTeemsService() {
    this.genereteTeams.next();
  }

  public deletePlayerTeamsService(player) {
    this.deletePlayerTeams.next(player);
  }

  public openSelectForTeamService() {
    this.openSelectForTeam.next();
  }

  public scrollToTopService() {
    this.scrollToTop.next();
  }

  public setOnePlayerTeamService(player) {
    this.setOnePlayerTeam.next(player);
  }
  public setPlayerAllListService(player) {
    this.setPlayerAllList.next(player);
  }
}