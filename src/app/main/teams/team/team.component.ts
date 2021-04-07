import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  @Input() team: any;
  @Input() indexTeam: number;
  @Input() editState: boolean;
  @Output() addNewPlayer = new EventEmitter<number>();
  @Output() selectListPlayer = new EventEmitter<number>();

  constructor() {}

  ngOnInit(): void {}

  public countLevelTeam(): number {
    return this.team.reduce((sum, player) => sum + player.level,0);
  }

  public onAddNewPlayer(): void {
    this.addNewPlayer.emit(this.indexTeam);
  }

  public onSelectListPlayer(): void {
    this.selectListPlayer.emit(this.indexTeam);
  }
}
