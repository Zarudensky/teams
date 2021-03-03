import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamsService } from '../../../app/teams.service';
import { UUID } from 'angular2-uuid';

interface StringOption {
  value: string;
  viewValue: string;
}

interface NumberOption {
  value: number;
  viewValue: string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  private _bool: boolean;
  @Output() boolChange = new EventEmitter();
  set bool(value) { this._bool = value; this.boolChange.emit(value); }
  @Input() get bool() { return this.bool; }

  public uuidValue:string;

  public filledFields: boolean;
  public playerGroup: FormGroup;
  
  public powers: StringOption[] = [
    {value: 'speed', viewValue: 'Скорость'},
    {value: 'tank', viewValue: 'Танк'},
    {value: 'throw', viewValue: 'Бросок'},
    {value: 'nо', viewValue: 'Нет'}
  ];

  public statuses: StringOption[] = [
    {value: 'veteran', viewValue: 'Ветеран'},
    {value: 'young', viewValue: 'Молодой'},
    {value: 'newcomer', viewValue: 'Новичек'}
  ];

  public positions: StringOption[] = [
    {value: 'attack', viewValue: 'Атакующий'},
    {value: 'defense', viewValue: 'Защитник'},
    {value: 'universal', viewValue: 'Универсал'}
  ];

  public points: NumberOption[] = [
    {value: 100, viewValue: '100'},
    {value: 75, viewValue: '75'},
    {value: 50, viewValue: '50'},
    {value: 25, viewValue: '25'},
    {value: 25, viewValue: '0'},
  ];

  constructor(private teamsService: TeamsService) {
    this.playerGroup = new FormGroup({
      id: new FormControl(''),
      avatar: new FormControl('avatar'),
      name: new FormControl(''),
      surname: new FormControl(''),
      power: new FormControl(this.powers),
      status: new FormControl(this.statuses),
      position: new FormControl(this.positions),
      attack: new FormControl(this.points),
      defense: new FormControl(this.points),
      accuracy: new FormControl(this.points),
      level: new FormControl(''),
      cc: new FormControl(0)
    });
  }

  ngOnInit(): void {
    if (this.teamsService.player) {
      this.setValuesForm(this.teamsService.player);
      this.filledFields = true;
    }
    this.playerGroup.valueChanges.subscribe(selectedValue => {
      if(selectedValue.name && 
        selectedValue.surname && 
        typeof selectedValue.power === 'string' && 
        typeof selectedValue.status === 'string' && 
        typeof selectedValue.position === 'string' && 
        typeof selectedValue.attack === 'number' && 
        typeof selectedValue.defense === 'number' && 
        typeof selectedValue.accuracy === 'number') {
        this.filledFields = true;
      }
    });
  }

  public setValuesForm(player): void {
    this.playerGroup.patchValue({
      id: player.id,
      avatar: player.avatar,
      name: player.name,
      surname: player.surname,
      power: player.power,
      status: player.status,
      position: player.position,
      attack: player.attack,
      defense: player.defense,
      accuracy: player.accuracy,
      cc: player.cc
    });
  }

  public onFormSubmit(): void {
    this.addNewPlayer();
    this.resetForm();
    this.hideModal();
  }

  public addNewPlayer(): void {
    this.generateId();
    this.countLevel();
    this.teamsService.savePlayerService(this.playerGroup.value);
  }

  public generateId(): void {
    if (!this.teamsService.player) {
      const id = this.uuidValue=UUID.UUID();
      this.playerGroup.value.id = id;
    }
  }

  public countLevel(): void {
    let level: number;
    level = this.playerGroup.value.attack + 
      this.playerGroup.value.defense + 
      this.playerGroup.value.accuracy + 
      this.playerGroup.value.cc;

    this.playerGroup.value.level = level;
  }

  public cancelForm(): void {
    this.resetForm();
    this.hideModal();
  }

  public hideModal(): void {
    this.bool = false;
  }

  public resetForm(): void {
    this.playerGroup.reset();
    this.teamsService.player = null;
  }
}
