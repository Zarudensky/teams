import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  @Input() indexTeam: number;
  @Input() editState: boolean;

  constructor() {}

  ngOnInit(): void {}

  public countLevelTeam(): number {
    return this.team.reduce((sum, player) => sum + player.level,0);
  }
}
