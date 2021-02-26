import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from '../app/main/main.component';
import { PlayersComponent } from '../app/players/players.component';
import { NotFoundComponent } from '../app/not-found/not-found.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'players', component: PlayersComponent },
  {path: '404', component: NotFoundComponent},
  {path: '**', redirectTo: '/404'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
