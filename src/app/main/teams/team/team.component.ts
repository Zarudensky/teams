import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public teamLevel: number;
  
  @Input() team: any;
  @Input() indexTeam: number;
  @Input() editState: boolean;

  constructor() {}

  ngOnInit(): void {
    this.teamLevel = this.team.reduce((sum, player) => sum + player.level,0);
  }
}
