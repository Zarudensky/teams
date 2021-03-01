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
  public showOrHideForm: boolean;

  displayedColumns: string[] = ['avatar', 'name', 'surname', 'power', 'position', 'attack', 'defense', 'accuracy', 'cc', 'level', 'actions'];

  constructor( 
    private teamsService: TeamsService, 
    private firestore: AngularFirestore
    ) {}

  ngOnInit():void {

  }

  public openForm() {
    console.log('openForm');
    this.showOrHideForm = true;
  }


  public chengePlayerClic(player) {
    console.log('chengePlayerClic and open mini form');

    
  }
  public deletePlayerClic(player) {
    console.log('deletePlayerClic and open popup');
  }
}