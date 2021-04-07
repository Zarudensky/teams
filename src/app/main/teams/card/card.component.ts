import { Component, OnInit, Input} from '@angular/core';
import { PlayersService } from '../../../services/players.service';
import { PlayerInfo } from '../../../entities';
import { TeamsService } from '../../../services/teams.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  public test: any;

  @Input() player: PlayerInfo;
  @Input() indexTeam: number;
  @Input() editState: boolean;

  constructor(
    private playersService: PlayersService,
    public teamsService: TeamsService) {}

  ngOnInit(): void {
  }

  public onDeletePlayer() {
    const indexPlayer = this.playersService.selectedPlayers.findIndex(player => player.id === this.player.id);
    this.playersService.selectedPlayers.splice(indexPlayer,1);
    this.teamsService.deletePlayerTeamsService(this.player);
  }
}
