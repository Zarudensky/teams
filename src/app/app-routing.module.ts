import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
import { PlayersComponent } from '../app/players/players.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'players', component: PlayersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
