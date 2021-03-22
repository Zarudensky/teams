import { Component, OnInit, Input  } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public teamLevel: number;
  
  @Input() team: any;
  @Input() index: any;

  constructor() { }

  ngOnInit(): void {
    this.teamLevel = this.team.teamInfo.reduce((sum, player) => sum + player.level,0);
  }


}
