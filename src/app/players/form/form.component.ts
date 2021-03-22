import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { PlayersService } from '../../players.service';
import { UUID } from 'angular2-uuid';
import { AngularFireStorage } from '@angular/fire/storage';
import { Observable } from 'rxjs';
import { TranslateService } from '@ngx-translate/core';

interface StringOption {
  value: string;
}

interface NumberOption {
  value: number;
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

  public selectedFile: File = null;
  public uuidValue:string;
  public fileUrl: Observable<string | null>;

  public filledFields: boolean;
  public playerGroup: FormGroup;
  
  public powers: StringOption[] = [
    { value: 'speed' },
    { value: 'tank' },
    { value: 'throw' },
    { value: 'nо' }
  ];

  public statuses: StringOption[] = [
    { value: 'young' },
    { value: 'veteran' },
    { value: 'newcomer' }
  ];

  public positions: StringOption[] = [
    { value: 'attack' },
    { value: 'defense' },
    { value: 'universal' }
  ];

  public points: NumberOption[] = [
    { value: 100 },
    { value: 75 },
    { value: 50 },
    { value: 25 },
    { value: 0 },
  ];

  public languages: {id: string, title: string}[] = [];

  constructor(
    private playersService: PlayersService,
    private storage: AngularFireStorage,
    private translateService: TranslateService,
    ) {
    this.playerGroup = new FormGroup({
      id: new FormControl(''),
      avatar: new FormControl(''),
      name: new FormControl(''),
      surname: new FormControl(''),
      power: new FormControl(this.powers),
      status: new FormControl(this.statuses),
      position: new FormControl(this.positions),
      attack: new FormControl(this.points),
      defense: new FormControl(this.points),
      accuracy: new FormControl(this.points),   
      cc: new FormControl(0),
      level: new FormControl(0)
    });
  }

  ngOnInit(): void {
    if (this.playersService.player) {
      this.setValuesForm(this.playersService.player);
    }
    this.playerGroup.valueChanges.subscribe(selectedValue => {
      this.valideteForm(selectedValue);
    });
  }
  
  public valideteForm(selectedValue): void {
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
    this.dowloadAvatarFile(player.id, player.avatar);
  }

  public onFormSubmit(): void {
    this.savePlayer();
    this.resetForm();
    this.hideModal();
  }

  public savePlayer(): void {
    this.generateId();
    this.countLevel();
    this.replaceCc();
    this.uploadNewAvatar();
    this.playersService.saveDataPlayerService(this.playerGroup.value, 'players');
  }

  public generateId(): void {
    if (!this.playersService.player) {
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

  public replaceCc(): void {
    if(this.playerGroup.value.cc === '') {
      this.playerGroup.value.cc = 0;
    }
  }

  public cancelForm(): void {
    this.deletePreviewFile();
    this.resetForm();
    this.hideModal();
  }

  public hideModal(): void {
    this.bool = false;
  }

  public resetForm(): void {
    this.playerGroup.reset();
    this.playersService.player = null;
  }

  public onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    this.uploadPreviewFile();
  }

  public dowloadAvatarFile(id, fileName) {
    if(fileName) {
      const filePath = 'avatars/' + id + '/' + fileName;
      const ref = this.storage.ref(filePath);
      this.fileUrl = ref.getDownloadURL();
    }
  }

  public uploadPreviewFile() {
    const filePath = 'avatars/preview/' + this.selectedFile.name;
    const ref = this.storage.ref(filePath);
    ref.put(this.selectedFile).then(() => {
      this.dowloadPreviewFile(ref);
    });
  }

  public dowloadPreviewFile(ref) {
    this.fileUrl = ref.getDownloadURL();
    if (this.playersService.player) {
      this.valideteForm(this.playersService.player);
    }
  }

  public deletePreviewFile() {
    if(this.selectedFile) {
      this.storage.ref('avatars/preview/').child(this.selectedFile.name).delete();
      this.selectedFile = null;
    }
  }

  public uploadNewAvatar() {
    if (this.selectedFile) {
      this.deleteOldAvatar();
      const filePath = 'avatars/'+ this.playerGroup.value.id +'/' + this.selectedFile.name;
      const ref = this.storage.ref(filePath);
      ref.put(this.selectedFile).then((snapshot) => {
        this.dowloadPreviewFile(ref);
      });
      this.playerGroup.value.avatar = this.selectedFile.name;
      this.deletePreviewFile();
    }
  }

  public deleteOldAvatar() {
    if(this.playerGroup.value.avatar) {
      this.storage.ref('avatars/' + this.playerGroup.value.id).child(this.playerGroup.value.avatar).delete();
    }
  }
}
