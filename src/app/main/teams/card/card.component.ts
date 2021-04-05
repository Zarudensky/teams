import { Component, OnInit, Input} from '@angular/core';
import { PlayersService } from '../../../services/players.service';
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
  }

  public onDeletePlayer(player) {
    // this.playersService.onSelectedPlayerService(player);
  }
}
