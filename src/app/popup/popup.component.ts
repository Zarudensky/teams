import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { TeamsService } from '../../app/teams.service';

export interface DialogData {
  title: string;
  content: string;
  yes: string;
  no: string;
  status: boolean
}

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
    constructor(
      private teamsService: TeamsService,
      public dialogRef: MatDialogRef<TeamsService>,
      @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
  
    onNoClick(): void {
      this.dialogRef.close();
    }
}
