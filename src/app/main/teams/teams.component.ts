import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../../../app/teams.service';
import { GenerateTeemsService } from './generateTeems.service';
import { PlayerInfo, TeamsInfo } from '../../entities';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
  public selectedPlayersData = this.teamsService.selectedPlayersData;
  public selectedPlayers: PlayerInfo[] = [];
  public nameClassTeams: string;
  public numberOfPlayers: number;
  public numberOfTeams: number;

  public defensePlayers: PlayerInfo[] = [];
  public universalPlayers: PlayerInfo[] = [];
  public attackPlayers: PlayerInfo[] = [];

  public firstTeam: PlayerInfo[] = [];
  public secondTeam: PlayerInfo[] = [];
  public thirdTeam: PlayerInfo[] = [];
  public fourthTeam: PlayerInfo[] = [];

  public firstTeamLevel: number = 0;
  public secondTeamLevel: number = 0;
  public thirdTeamLevel: number = 0;
  public fourthTeamLevel: number = 0;


  public teams: Array<TeamsInfo> = [];

  constructor(
    private teamsService: TeamsService,
    private generateTeemsService: GenerateTeemsService
    ) {
    this.teamsService.selectedPlayersData.subscribe((players) => {
      this.selectedPlayers = players;
      this.numberOfPlayers = this.selectedPlayers.length;
    })
  }

  ngOnInit(): void {
    this.teamsService.ganereteTeams.subscribe(() => {
      console.log('ganereteTeams - TeamsComponent');
      // if teams were generate, add new players in teams and display massage about it
      if(this.selectedPlayers.length >= 8) {
        this.countTeams();
        this.ganereteTeams();
      }
    });
  }

  public ganereteTeams(): void {
    this.clearOldTeams();
    this.filteredPlayersPosition();

    this.addPlayersTeams(this.defensePlayers);
    this.addPlayersTeams(this.universalPlayers);
    this.addPlayersTeams(this.attackPlayers);

    this.correctedTeams();

    switch (this.numberOfTeams) {
      case 2:
        this.teams = [
          { team: this.firstTeam },
          { team: this.secondTeam }
        ];
        break;
      case 3:
        this.teams = [
          { team: this.firstTeam },
          { team: this.secondTeam },
          { team: this.thirdTeam },
        ];
        break;
      case 4:
        this.teams = [
          { team: this.firstTeam },
          { team: this.secondTeam },
          { team: this.thirdTeam },
          { team: this.fourthTeam }
        ];
        break;
    }

    console.log(this.firstTeamLevel);
    console.log(this.firstTeam);
    console.log(this.secondTeamLevel);
    console.log(this.secondTeam);
    console.log(this.thirdTeamLevel);
    console.log(this.thirdTeam);
    console.log(this.fourthTeamLevel);
    console.log(this.fourthTeam);

    console.log(this.teams);
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
    this.defensePlayers = this.selectedPlayers.filter(obj => {
      return obj.position === 'defense'
    });
    this.universalPlayers = this.selectedPlayers.filter(obj => {
      return obj.position === 'universal'
    });
    this.attackPlayers = this.selectedPlayers.filter(obj => {
      return obj.position === 'attack'
    });
  }

  public addPlayersTeams(players): void {
    players.forEach(player => {
      this.firstTeamLevel = this.countLevelTeam(this.firstTeam);
      this.secondTeamLevel = this.countLevelTeam(this.secondTeam);
      this.thirdTeamLevel = this.countLevelTeam(this.thirdTeam);
      this.fourthTeamLevel = this.countLevelTeam(this.fourthTeam);

      if(this.numberOfTeams === 2) {
        switch (true) {
          // Level divide
          case this.firstTeamLevel === 0 && this.secondTeamLevel === 0:
            this.firstTeam.push(player);
            break;
          case this.firstTeamLevel > this.secondTeamLevel:
            this.secondTeam.push(player);
            break;
          case this.firstTeamLevel < this.secondTeamLevel:
            this.firstTeam.push(player);
            break;
          // Default length divide
          case this.firstTeam.length === this.secondTeam.length:
            this.firstTeam.push(player);
            break;
          case this.firstTeam.length > this.secondTeam.length:
            this.secondTeam.push(player);
            break;
          case this.firstTeam.length < this.secondTeam.length:
            this.firstTeam.push(player);
            break;
        }
      }
      if(this.numberOfTeams === 3) {
        switch (true) {
          // Level divide first
          case this.firstTeamLevel === 0 && 
               this.secondTeamLevel === 0 && 
               this.thirdTeamLevel === 0:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel === 0:
            this.secondTeam.push(player);
            break;
          case this.thirdTeamLevel === 0:
            this.thirdTeam.push(player);
            break;
          // Level divide second
          case this.firstTeamLevel < this.secondTeamLevel && 
               this.firstTeamLevel < this.thirdTeamLevel:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel < this.firstTeamLevel && 
               this.secondTeamLevel < this.thirdTeamLevel:
            this.secondTeam.push(player);
            break;
          case this.thirdTeamLevel < this.firstTeamLevel && 
               this.thirdTeamLevel < this.secondTeamLevel:
            this.thirdTeam.push(player);
            break;
          // Default length divide
          case this.firstTeam.length === this.secondTeam.length && 
               this.firstTeam.length === this.thirdTeam.length:
            this.firstTeam.push(player);
            break;
          case this.firstTeam.length < this.secondTeam.length && 
               this.firstTeam.length < this.thirdTeam.length:
            this.firstTeam.push(player);
            break;
          case this.secondTeam.length < this.firstTeam.length && 
               this.secondTeam.length < this.thirdTeam.length:
            this.secondTeam.push(player);
            break;
          case this.thirdTeam.length < this.firstTeam.length && 
               this.thirdTeam.length < this.secondTeam.length:
            this.thirdTeam.push(player);
            break;
        }
      }
      if(this.numberOfTeams === 4) {
        switch (true) {
          // Level divide first
          case this.firstTeamLevel === 0 && 
               this.secondTeamLevel === 0 && 
               this.thirdTeamLevel === 0 && 
               this.fourthTeamLevel === 0:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel === 0:
            this.secondTeam.push(player);
            break;
          case this.thirdTeamLevel === 0:
            this.thirdTeam.push(player);
            break;
          case this.fourthTeamLevel === 0:
               this.fourthTeam.push(player);
            break;
          // Level divide second
          case this.firstTeamLevel < this.secondTeamLevel &&
               this.firstTeamLevel < this.thirdTeamLevel && 
               this.firstTeamLevel < this.fourthTeamLevel:
            this.firstTeam.push(player);
            break;
          case this.secondTeamLevel < this.firstTeamLevel && 
               this.secondTeamLevel < this.thirdTeamLevel && 
               this.secondTeamLevel < this.fourthTeamLevel:
            this.secondTeam.push(player);
            break;
          case this.thirdTeamLevel < this.firstTeamLevel && 
               this.thirdTeamLevel < this.secondTeamLevel && 
               this.thirdTeamLevel < this.fourthTeamLevel:
            this.thirdTeam.push(player);
            break;
          case this.fourthTeamLevel < this.firstTeamLevel && 
               this.fourthTeamLevel < this.secondTeamLevel && 
               this.fourthTeamLevel < this.thirdTeamLevel:
            this.fourthTeam.push(player);
            break;
          // Default length divide
          case this.firstTeam.length === this.secondTeam.length && 
               this.firstTeam.length === this.thirdTeam.length && 
               this.firstTeam.length === this.fourthTeam.length:
            this.firstTeam.push(player);
            break;
          case this.firstTeam.length < this.secondTeam.length && 
               this.firstTeam.length < this.thirdTeam.length && 
               this.firstTeam.length < this.fourthTeam.length:
            this.firstTeam.push(player);
            break;
          case this.secondTeam.length < this.firstTeam.length && 
               this.secondTeam.length < this.thirdTeam.length && 
               this.secondTeam.length < this.fourthTeam.length:
            this.secondTeam.push(player);
            break;
          case this.thirdTeam.length < this.firstTeam.length && 
               this.thirdTeam.length < this.secondTeam.length && 
               this.thirdTeam.length < this.fourthTeam.length:
            this.thirdTeam.push(player);
            break;
          case this.fourthTeam.length < this.firstTeam.length && 
               this.fourthTeam.length < this.secondTeam.length && 
               this.fourthTeam.length < this.thirdTeam.length:
            this.fourthTeam.push(player);
            break;
        }
      }
    });
  }

  public correctedTeams(): void {
    console.log('correctedTeams');
  }

  public countLevelTeam(team): number {
    return team.reduce((sum, player) => sum + player.level,0);
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

  public deleteAllSelectedPlayers(): void {
    this.selectedPlayers = [];
    this.numberOfTeams = 0;
    this.clearOldTeams();
    this.teamsService.deleteAllSelectedPlayersService();
  }
}
