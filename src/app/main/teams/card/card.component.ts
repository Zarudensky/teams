import { Component, OnInit, Input } from '@angular/core';
import { PlayersService } from '../../../players.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() player: any;

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
  }

  public onDeletePlayer(player) {
    this.playersService.onSelectedPlayerService(player);
  }
}
