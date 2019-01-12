import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/services/movies.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  moviesList: any[] = [];
  moviesNewList: any[] = [];
  movies3dList: any[] = [];

  loading = true;

  constructor(public moviesService: MoviesService) {

    this.moviesService.getListMovies().subscribe(movies => {
      this.moviesList = movies.data.movies;
      console.log(this.moviesList);
      this.loading = false;
    });

    this.moviesService.getListNewMovies().subscribe(movies => {
      this.moviesNewList = movies.data.movies;
    });

    this.moviesService.getList3dMovies().subscribe(movies3d => {
      this.movies3dList = movies3d.data.movies;
    });

  }

  ngOnInit() {
  }

}
