import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { TeamsService } from '../../../app/teams.service';

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

  public filledFields: boolean;
  public playerGroup;
  
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
    {value: 'attack', viewValue: 'Атака'},
    {value: 'defense', viewValue: 'Защита'},
    {value: 'universal', viewValue: 'Универсал'}
  ];

  public points: NumberOption[] = [
    {value: 100, viewValue: '100'},
    {value: 75, viewValue: '75'},
    {value: 50, viewValue: '50'},
    {value: 25, viewValue: '25'},
    {value: 25, viewValue: '0'},
  ];

  public powerCtrl = new FormControl(this.powers);
  public statusCtrl = new FormControl(this.statuses);
  public positionCtrl = new FormControl(this.positions);
  public attackCtrl = new FormControl(this.points);
  public defenseCtrl = new FormControl(this.points);
  public accuracyCtrl = new FormControl(this.points);


  constructor(private teamsService: TeamsService) {
    this.playerGroup = new FormGroup({
      name: new FormControl(''),
      surname: new FormControl(''),
      power: this.powerCtrl,
      status: this.statusCtrl,
      position: this.positionCtrl,
      attack: this.attackCtrl,
      defense: this.defenseCtrl,
      accuracy: this.accuracyCtrl,
      cc: new FormControl('')
    });
  }

  ngOnInit(): void {
    this.playerGroup.reset();
    this.playerGroup.valueChanges.subscribe(selectedValue => {
      if(selectedValue.name && 
        selectedValue.surname && 
        selectedValue.power && 
        selectedValue.status && 
        selectedValue.position && 
        selectedValue.attack && 
        selectedValue.defense && 
        selectedValue.accuracy) {
        this.filledFields = true;
      }
    });
  }

  public onFormSubmit() {
    console.log('onFormSubmit');

    // generate and add id
    
    this.teamsService.savePlayerService(this.playerGroup.value);
    this.resetForm();
    this.hideModal();
  }

  public cancelForm() {
    console.log('cancelForm');
    this.resetForm();
    
    this.hideModal();
  }

  public hideModal() {
    this.bool = false;
  }

  public resetForm() {
    this.playerGroup.reset();
  }

}
