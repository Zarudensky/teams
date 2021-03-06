import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { TeamsService } from './teams.service';
import { GenerateTeemsService } from './main/teams/generateTeems.service';

import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { PlayersComponent } from './players/players.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SelectComponent } from './main/select/select.component';
import { TeamsComponent } from './main/teams/teams.component';
import { CardComponent } from './main/teams/card/card.component';
import { FormComponent } from './players/form/form.component';
import { PopupComponent } from './popup/popup.component';
import { AvatarComponent } from './avatar/avatar.component';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';


import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';

import { environment } from '../environments/environment';
import { TeamComponent } from './main/teams/team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    PlayersComponent,
    NotFoundComponent,
    SelectComponent,
    TeamsComponent,
    CardComponent,
    FormComponent,
    PopupComponent,
    AvatarComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule
  ],
  providers: [TeamsService, GenerateTeemsService],
  bootstrap: [AppComponent]
})
export class AppModule {}