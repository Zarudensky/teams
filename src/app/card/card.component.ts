import { Component, OnInit, Input } from '@angular/core';
import { TeamsService } from '../../app/teams.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() player: any;
  @Input() index: number;

  constructor(private teamsService: TeamsService) {}

  ngOnInit(): void {
  }

  public onDeletePlayer(index) {
    this.teamsService.onDeletePlayerService(index);
  }
}
