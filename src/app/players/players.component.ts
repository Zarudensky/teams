import { Component, OnInit, Input, Output } from '@angular/core';
import { TeamsService } from '../../app/teams.service';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})

export class PlayersComponent implements OnInit {
  public allPlayersData = this.teamsService.allPlayersData;

  public showOrHideForm = false;

  // @Input() showOrHideForm: boolean;

  displayedColumns: string[] = ['avatar', 'name', 'surname', 'power', 'position', 'attack', 'defense', 'accuracy', 'cc', 'level', 'actions'];

  constructor( 
    private teamsService: TeamsService
    ) {}

  ngOnInit():void {

  }

  public openForm() {
    console.log('openForm');
    this.showPopup();
  }
  public showPopup() {
    this.showOrHideForm = true;
  }


  public chengePlayerClic(player) {
    console.log('chengePlayerClic and open mini form');

    
  }
  public deletePlayerClic(player) {
    console.log('deletePlayerClic and open popup');
  }
}