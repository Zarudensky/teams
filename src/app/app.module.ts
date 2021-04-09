import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { PlayersService } from './services/players.service';
import { TeamsService } from './services/teams.service';
import { AuthService } from './services/auth.service';

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
import { TeamComponent } from './main/teams/team/team.component';
import { LanguagesComponent } from './languages/languages.component';
import { AuthComponent } from './auth/auth.component';

import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgxMatSelectSearchModule } from 'ngx-mat-select-search';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';

import { DragDropModule } from '@angular/cdk/drag-drop';

import { ShareButtonsModule } from 'ngx-sharebuttons/buttons';
import { ShareIconsModule } from 'ngx-sharebuttons/icons';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAnalyticsModule } from '@angular/fire/analytics';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from '../environments/environment';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


export function HttpLoaderFactory(http: HttpClient): TranslateLoader {
  return new TranslateHttpLoader(http, './assets/locale/', '.json');
}

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
    TeamComponent,
    LanguagesComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatIconModule,
    NgxMatSelectSearchModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatMenuModule,
    DragDropModule,
    ShareButtonsModule.withConfig({
      debug: true
    }),
    ShareIconsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAnalyticsModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
      useDefaultLang: false,
    })
  ],
  providers: [PlayersService, TeamsService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}