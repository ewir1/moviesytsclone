import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BrowserMoviesComponent } from './components/browser-movies/browser-movies.component';
import { MovieComponent } from './components/movie/movie.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'search', component: BrowserMoviesComponent },
  { path: 'search/:text', component: BrowserMoviesComponent },
  { path: 'movie/:id', component: MovieComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
  })
export class AppRoutingModule {}
