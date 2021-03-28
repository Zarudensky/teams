import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../../players.service';
import { TeamsService } from './teams.service';
import { TeamInfo, PlayerInfo } from '../../entities';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public selectedPlayersData = this.playersService.selectedPlayersData;
  public selectedPlayers: PlayerInfo[] = [];
  public numberOfPlayers: number;
  public numberOfTeams: number;

  public defensePlayers: PlayerInfo[];
  public universalPlayers: PlayerInfo[];
  public attackingPlayers: PlayerInfo[];

  public firstTeam: PlayerInfo[];
  public secondTeam: PlayerInfo[];
  public thirdTeam: PlayerInfo[];
  public fourthTeam: PlayerInfo[];

  public firstTeamLevel: number;
  public secondTeamLevel: number;
  public thirdTeamLevel: number;
  public fourthTeamLevel: number;

  public teams;
  public relocatedPlayerMax: PlayerInfo;
  public relocatedPlayerMin: PlayerInfo;

  public editState: boolean = true;
  
  constructor(
    private playersService: PlayersService,
    public teamsService: TeamsService
    ) {
    this.playersService.selectedPlayersData.subscribe((players) => {
      this.selectedPlayers = players;
      this.numberOfPlayers = this.selectedPlayers.length;
    });
    this.visibleOldTeams();
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.teamsService.ganereteTeams.subscribe(() => {
      this.countNewTeams();
      this.ganereteTeams();
    });
  }
  public visibleOldTeams(): void {
    console.log('visibleOldTeams');
    this.teamsService.getPlayersTeam('firstTeam');
    this.teamsService.getPlayersTeam('secondTeam');
    this.teamsService.getPlayersTeam('thirdTeam');
    this.teamsService.getPlayersTeam('fourthTeam');
    
    this.teams = [
      this.teamsService.firstTeam,
      this.teamsService.secondTeam,
      this.teamsService.thirdTeam,
      this.teamsService.fourthTeam
    ];
  }

  public visibleNewTeams(): void {
    console.log('visibleNewTeams');
    this.teams = [
      this.firstTeam,
      this.secondTeam,
      this.thirdTeam,
      this.fourthTeam
    ];
  }

  public ganereteTeams(): void {
    console.log('ganereteTeams');
    this.clearOldTeams();
    this.filteredPlayersPosition();
    
    this.addPlayersToTeamsByLevel(this.defensePlayers);
    this.addPlayersToTeamsByLevel(this.universalPlayers);
    this.addPlayersToTeamsByLevel(this.attackingPlayers);

    this.correctedTeamsByNumberOf();
    this.correctedTeamsByNumberOf();

    this.correctedTeamsByLevel();
    this.correctedTeamsByLevel();

    // this.setTeams();
    this.visibleNewTeams();
    this.editState = false;
  }

  public setTeams(): void {
    console.log('setTeams');
    this.teamsService.setTeamService(this.firstTeam, 'firstTeam');
    this.teamsService.setTeamService(this.secondTeam, 'secondTeam');
    this.teamsService.setTeamService(this.thirdTeam, 'thirdTeam');
    this.teamsService.setTeamService(this.fourthTeam, 'fourthTeam');
  }

  public countNewTeams(): void {
    console.log('countNewTeams');
    switch (true) {
      case this.numberOfPlayers >= 8 && this.numberOfPlayers <= 11:
        this.numberOfTeams = 2;
        break;
      case this.numberOfPlayers >= 12 && this.numberOfPlayers <= 15:
        this.numberOfTeams = 3;
        break;
      case this.numberOfPlayers >= 16:
        this.numberOfTeams = 4;
        break;
      default:
        this.numberOfTeams = 0;
    }
  }

  public filteredPlayersPosition(): void {
    this.defensePlayers = this.selectedPlayers.filter(player => {
      return player.position === 'defense'
    });
    this.universalPlayers = this.selectedPlayers.filter(player => {
      return player.position === 'universal'
    });
    this.attackingPlayers = this.selectedPlayers.filter(player => {
      return player.position === 'attack'
    });
  }

  public addPlayersToTeamsByLevel(players): void {
    players.forEach(player => {
      this.countLevelTeams();
      if(this.numberOfTeams === 2) {
        switch (true) {
          case this.firstTeamLevel <= this.secondTeamLevel:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel <= this.firstTeamLevel:
            this.secondTeam.push(player);
            break;
          default:
            this.firstTeam.push(player);
        }
      }
      if(this.numberOfTeams === 3) {
        switch (true) {
          case this.firstTeamLevel <= this.secondTeamLevel && 
               this.firstTeamLevel <= this.thirdTeamLevel:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel <= this.firstTeamLevel && 
               this.secondTeamLevel <= this.thirdTeamLevel:
            this.secondTeam.push(player);
            break;
          case this.thirdTeamLevel <= this.firstTeamLevel && 
               this.thirdTeamLevel <= this.secondTeamLevel:
            this.thirdTeam.push(player);
            break;
          default:
            this.firstTeam.push(player);
        }
      }
      if(this.numberOfTeams === 4) {
        switch (true) {
          case this.firstTeamLevel <= this.secondTeamLevel &&
               this.firstTeamLevel <= this.thirdTeamLevel && 
               this.firstTeamLevel <= this.fourthTeamLevel:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel <= this.firstTeamLevel && 
               this.secondTeamLevel <= this.thirdTeamLevel && 
               this.secondTeamLevel <= this.fourthTeamLevel:
            this.secondTeam.push(player);
            break;
          case this.thirdTeamLevel <= this.firstTeamLevel && 
               this.thirdTeamLevel <= this.secondTeamLevel && 
               this.thirdTeamLevel <= this.fourthTeamLevel:
            this.thirdTeam.push(player);
            break;
          case this.fourthTeamLevel <= this.firstTeamLevel && 
               this.fourthTeamLevel <= this.secondTeamLevel && 
               this.fourthTeamLevel <= this.thirdTeamLevel:
            this.fourthTeam.push(player);
            break;
          default:
            this.firstTeam.push(player);
        }
      }
    });
  }

  public countLevelTeams(): void {
    this.firstTeamLevel = this.countLevelTeam(this.firstTeam);
    this.secondTeamLevel = this.countLevelTeam(this.secondTeam);
    this.thirdTeamLevel = this.countLevelTeam(this.thirdTeam);
    this.fourthTeamLevel = this.countLevelTeam(this.fourthTeam);
  }

  public correctedTeamsByNumberOf(): void {
    let lengthArr = [];
    let lengthMin:number;
    let lengthMax:number;

    if (this.firstTeam.length > 0) {
      lengthArr.push(this.firstTeam.length);
    }
    if (this.secondTeam.length > 0) {
      lengthArr.push(this.secondTeam.length);
    }
    if (this.thirdTeam.length > 0) {
      lengthArr.push(this.thirdTeam.length);
    }
    if (this.fourthTeam.length > 0) {
      lengthArr.push(this.fourthTeam.length);
    }

    lengthMin = Math.min(...lengthArr);
    lengthMax = Math.max(...lengthArr);

    if(lengthMax - lengthMin >= 2) {
      switch (lengthMax) {
        case this.firstTeam.length:
          this.getRelocatePlayerMin(this.firstTeam);
          this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayerMin),1);
          break;
        case this.secondTeam.length:
          this.getRelocatePlayerMin(this.secondTeam);
          this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayerMin),1);
          break;
        case this.thirdTeam.length:
          this.getRelocatePlayerMin(this.thirdTeam);
          this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayerMin),1);
          break;
        case this.thirdTeam.length:
          this.getRelocatePlayerMin(this.thirdTeam);
          this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayerMin),1);
          break;
      }

      switch (lengthMin) {
        case this.firstTeam.length:
          this.firstTeam.push(this.relocatedPlayerMin);
          break;
        case this.secondTeam.length:
          this.secondTeam.push(this.relocatedPlayerMin);
          break;
        case this.thirdTeam.length:
          this.thirdTeam.push(this.relocatedPlayerMin);
          break;
        case this.fourthTeam.length:
          this.fourthTeam.push(this.relocatedPlayerMin);
          break;
      }
    }
  }

  public correctedTeamsByLevel(): void {
    let levelTeamsArr = [];
    let levelTeamMax:number;
    let levelTeamMin:number;
    let indexTeamMax:number;
    let indexTeamMin:number;
    
    this.countLevelTeams();

    if (this.firstTeamLevel > 0) {
      levelTeamsArr.push(this.firstTeamLevel);
    }
    if (this.secondTeamLevel > 0) {
      levelTeamsArr.push(this.secondTeamLevel);
    }
    if (this.thirdTeamLevel > 0) {
      levelTeamsArr.push(this.thirdTeamLevel);
    }
    if (this.fourthTeamLevel > 0) {
      levelTeamsArr.push(this.fourthTeamLevel);
    }

    levelTeamMax = Math.max(...levelTeamsArr);
    levelTeamMin = Math.min(...levelTeamsArr);
    
    indexTeamMax = levelTeamsArr.indexOf(Math.max(...levelTeamsArr));
    indexTeamMin = levelTeamsArr.indexOf(Math.min(...levelTeamsArr));

    if(levelTeamMax - levelTeamMin >= 150 ) {
      switch (indexTeamMax) {
        case 0:
          this.getRelocatePlayerMax(this.firstTeam);
          this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayerMax),1);
          break;
        case 1:
          this.getRelocatePlayerMax(this.secondTeam);
          this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayerMax),1);
          break;
        case 2:
          this.getRelocatePlayerMax(this.thirdTeam);
          this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayerMax),1);
          break;
        case 3:
          this.getRelocatePlayerMax(this.fourthTeam);
          this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayerMax),1);
          break;
      }

      switch (indexTeamMin) {
        case 0:
          this.getRelocatePlayerMin(this.firstTeam);
          this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayerMin),1);
          this.firstTeam.push(this.relocatedPlayerMax);
          break;
        case 1:
          this.getRelocatePlayerMin(this.secondTeam);
          this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayerMin),1);
          this.secondTeam.push(this.relocatedPlayerMax);
          break;
        case 2:
          this.getRelocatePlayerMin(this.thirdTeam);
          this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayerMin),1);
          this.thirdTeam.push(this.relocatedPlayerMax);
          break;
        case 3:
          this.getRelocatePlayerMin(this.fourthTeam);
          this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayerMin),1);
          this.fourthTeam.push(this.relocatedPlayerMax);
          break;
      }

      switch (indexTeamMax) {
        case 0:
          this.firstTeam.push(this.relocatedPlayerMin);
          break;
        case 1:
          this.secondTeam.push(this.relocatedPlayerMin);
          break;
        case 2:
          this.thirdTeam.push(this.relocatedPlayerMin);
          break;
        case 3:
          this.fourthTeam.push(this.relocatedPlayerMin);
          break;
      }
    }
  }

  public getRelocatePlayerMax(team): void {
    this.relocatedPlayerMax = team.reduce((res, player) => res.level > player.level ? res : player);
  }

  public getRelocatePlayerMin(team): void {
    this.relocatedPlayerMin = team.reduce((res, player) => player.level < res.level ? player : res);
  }

  public countLevelTeam(team): number {
    return team.reduce((sum, player) => sum + player.level,0);
  }

  public onDivideTeams(dividedInto): void {
    this.numberOfTeams = dividedInto;
    this.ganereteTeams();
  }

  public clearOldTeams(): void {
    this.firstTeam = [];
    this.secondTeam = [];
    this.thirdTeam = [];
    this.fourthTeam = [];
    this.firstTeamLevel = 0;
    this.secondTeamLevel = 0;
    this.thirdTeamLevel = 0;
    this.fourthTeamLevel = 0;
  }

  public deleteAllSelectedPlayers(): void {
    this.numberOfTeams = 0;
    this.clearOldTeams();
    this.playersService.deleteSeveralPlayersService('selected');
    this.setTeams();
  }

  public onEditTeams(): void {
    this.editState = false;
    this.addOldTeams();
    this.countOldTeams();
  }

  public addOldTeams(): void {
    this.firstTeam = this.teamsService.firstTeam;
    this.secondTeam = this.teamsService.secondTeam;
    this.thirdTeam = this.teamsService.thirdTeam;
    this.fourthTeam = this.teamsService.fourthTeam;
  }

  public countOldTeams(): void {
    switch (true) {
      case this.secondTeam.length >= 1 &&
           this.thirdTeam.length >= 1 &&
           this.fourthTeam.length >= 1:
        this.numberOfTeams = 4;
        break;
      case this.secondTeam.length >= 1 &&
           this.thirdTeam.length >= 1:
        this.numberOfTeams = 3;
        break;
      case this.secondTeam.length >= 1:
        this.numberOfTeams = 2;
        break;
      default:
        this.numberOfTeams = 0;
    }
  }

  public onSaveTeams(): void {
    console.log('onSaveTeams');
    this.editState = true;
    this.setTeams();
    console.log(this.numberOfTeams);
  }
}
