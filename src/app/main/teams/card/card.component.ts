import { Component, OnInit, Input} from '@angular/core';
import { PlayersService } from '../../../players.service';
import { PlayerInfo } from '../../../entities';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() player: PlayerInfo;

  constructor(private playersService: PlayersService) {}

  ngOnInit(): void {
    console.log('app-card');
  }

  public onDeletePlayer(player) {
    this.playersService.onSelectedPlayerService(player);
  }
}
