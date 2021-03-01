import { Component, OnInit } from '@angular/core';
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
  public playerGroup;

  public powers: StringOption[] = [
    {value: 'speed', viewValue: 'Скорость'},
    {value: 'tank', viewValue: 'Танк'},
    {value: 'throw', viewValue: 'Бросок'}
  ];

  public statuses: StringOption[] = [
    {value: 'young', viewValue: 'Молодой'},
    {value: 'veteran', viewValue: 'Ветеран'},
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
    // this.playerGroup.patchValue(this.playerGroup.value);
    console.log(this.powers);
    // this.playerGroup.setControl(
      
    //    {name = new FormControl('')}
    //   // 'surname': new FormControl(''),
    //   // 'power': new FormControl(powerOptions),
    //   // // 'status': new FormControl(statusOptions),
    //   // // 'position': new FormControl(positionOptions),
    //   // // 'attack': new FormControl(numberOptions),
    //   // // 'defense': new FormControl(numberOptions),
    //   // // 'accuracy': new FormControl(numberOptions),
    //   // 'cc': new FormControl('')
    // );
  
  }

  public onFormSubmit() {
    console.log('onFormSubmit');
    this.teamsService.savePlayerService(this.playerGroup.value);
  }

  public cancelForm() {
    console.log('cancelForm');
    this.resetForm();
  }
  public resetForm() {
    this.playerGroup.reset();
  }

}
