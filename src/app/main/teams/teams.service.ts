import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { PlayerInfo } from '../../entities';
import { PlayersService } from '../../players.service'

@Injectable()

export class TeamsService {
  public selectedPlayersData: Observable<any[]>;

  constructor(
    private firestore: AngularFirestore,
    private playersService: PlayersService) {
    this.selectedPlayersData = firestore.collection('selected').valueChanges();

  }

  public setTeam(team, collection) {
    console.log('setTeam');
    // this.deleteOldTeam(collection);
    // console.log('end Delete');
    // team.forEach(player => {
    //   console.log('forEach');
    //   this.playersService.saveDataPlayerService(player, collection);
    // });
    // console.log('end forEach');
  }

  public deleteOldTeam(collection) {
    console.log('deleteOldTeam');
    // this.playersService.deleteSeveralPlayersService(collection);
  }
  

}
