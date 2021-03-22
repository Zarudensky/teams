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
  public nameClassTeams: string;
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

  public teams: TeamInfo[];
  public relocatedPlayer: PlayerInfo;

  constructor(
    private playersService: PlayersService,
    private teamsService: TeamsService
    ) {
    this.playersService.selectedPlayersData.subscribe((players) => {
      this.selectedPlayers = players;
      this.numberOfPlayers = this.selectedPlayers.length;
    })
  }

  ngOnInit(): void {
    this.playersService.ganereteTeams.subscribe(() => {
      if(this.selectedPlayers.length >= 8) {
        this.countTeams();
        this.ganereteTeams();
      }
    });
  }

  public ganereteTeams(): void {
    this.clearOldTeams();
    this.filteredPlayersPosition();
    
    this.addPlayersToTeamsByLevel(this.defensePlayers);
    this.addPlayersToTeamsByLevel(this.universalPlayers);
    this.addPlayersToTeamsByLevel(this.attackingPlayers);

    this.correctedTeamsByNumberOf();

    switch (this.numberOfTeams) {
      case 2:
        this.teams = [
          { teamInfo: this.firstTeam },
          { teamInfo: this.secondTeam }
        ];
        break;
      case 3:
        this.teams = [
          { teamInfo: this.firstTeam },
          { teamInfo: this.secondTeam },
          { teamInfo: this.thirdTeam },
        ];
        break;
      case 4:
        this.teams = [
          { teamInfo: this.firstTeam },
          { teamInfo: this.secondTeam },
          { teamInfo: this.thirdTeam },
          { teamInfo: this.fourthTeam }
        ];
        break;
    }
    this.teamsService.setTeams(this.teams);
  }

  public countTeams(): void {
    switch (true) {
      case this.numberOfPlayers >= 8 && this.numberOfPlayers <= 11:
        this.nameClassTeams = 'two__teams';
        this.numberOfTeams = 2;
        break;
      case this.numberOfPlayers >= 12 && this.numberOfPlayers <= 15:
        this.nameClassTeams = 'three__teams';
        this.numberOfTeams = 3;
        break;
      case this.numberOfPlayers >= 16:
        this.nameClassTeams = 'four__teams';
        this.numberOfTeams = 4;
        break;
      default:
        this.nameClassTeams = '';
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
      this.firstTeamLevel = this.countLevelTeam(this.firstTeam);
      this.secondTeamLevel = this.countLevelTeam(this.secondTeam);
      this.thirdTeamLevel = this.countLevelTeam(this.thirdTeam);
      this.fourthTeamLevel = this.countLevelTeam(this.fourthTeam);

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
          this.getRelocatePlayer(this.firstTeam);
          this.firstTeam.splice(this.firstTeam.indexOf(this.relocatedPlayer),1);
          break;
        case this.secondTeam.length:
          this.getRelocatePlayer(this.secondTeam);
          this.secondTeam.splice(this.secondTeam.indexOf(this.relocatedPlayer),1);
          break;
        case this.thirdTeam.length:
          this.getRelocatePlayer(this.thirdTeam);
          this.thirdTeam.splice(this.thirdTeam.indexOf(this.relocatedPlayer),1);
          break;
        case this.thirdTeam.length:
          this.getRelocatePlayer(this.thirdTeam);
          this.fourthTeam.splice(this.fourthTeam.indexOf(this.relocatedPlayer),1);
          break;
      }

      switch (lengthMin) {
        case this.firstTeam.length:
          this.firstTeam.push(this.relocatedPlayer);
          break;
        case this.secondTeam.length:
          this.secondTeam.push(this.relocatedPlayer);
          break;
        case this.thirdTeam.length:
          this.thirdTeam.push(this.relocatedPlayer);
          break;
        case this.fourthTeam.length:
          this.fourthTeam.push(this.relocatedPlayer);
          break;
      }
    }
  }

  public getRelocatePlayer(team): void {
    this.relocatedPlayer = team.reduce(function(res, player) {
      return (player.level < res.level) ? player : res;
    });
  }

  public countLevelTeam(team): number {
    return team.reduce((sum, player) => sum + player.level,0);
  }

  public onDivideTeams(dividedInto): void {
    this.numberOfTeams = dividedInto;
    switch (this.numberOfTeams) {
      case 2:
        this.nameClassTeams = 'two__teams';
        break;
      case 3:
        this.nameClassTeams = 'three__teams';
        break;
      case 4:
        this.nameClassTeams = 'four__teams';
        break;
    }
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
    this.nameClassTeams = '';
    this.clearOldTeams();
    this.playersService.deleteAllSelectedPlayersService();
  }
}
