import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../../../teams.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() player: any;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
  }

  public onDeletePlayer(player) {
    this.teamsService.onSelectedPlayerService(player);
  }
}
