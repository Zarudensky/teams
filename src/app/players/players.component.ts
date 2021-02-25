import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../app/teams.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  constructor(private teamsService: TeamsService, public db: AngularFirestore) {
  }
  ngOnInit():void {
    this.teamsService.getpPlayers();
  }
  public onBtnClick():void {
    console.log('onBtnClick');
  }
}


  

