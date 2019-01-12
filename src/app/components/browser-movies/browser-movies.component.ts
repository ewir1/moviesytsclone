import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-browser-movies',
  templateUrl: './browser-movies.component.html',
  styleUrls: ['./browser-movies.component.scss'],
  })
export class BrowserMoviesComponent implements OnInit {
  search: string;

  loading = false;

  movies: any[] = [];

  moviesAdv: Object = {
    term: '',
    quality: '',
    genre: '',
    rating: '',
    orderBy: '',
  };

  terms: string;

  qualitys: any[] = ['1080p', '720p', '3D'];

  genres: any[] = [
    'Action',
    'Adventure',
    'Animation',
    'Biography',
    'Comedy',
    'Crime',
    'Documentary',
    'Drama',
    'Family',
    'Fantasy',
    'Film Noir',
    'History',
    'Horror',
    'Music',
    'Musical',
    'Mystery',
    'Romance',
    'Sci-Fi',
    'Short',
    'Sport',
    'Superhero',
    'Thriller',
    'War',
    'Western',
  ];

  ratings: any[] = ['+1', '+2', '+3', '+4', '+5', '+6', '+7', '+8', '+9'];

  orderBys: any[] = [
    'latest',
    'oldest',
    'seeds',
    'peers',
    'year',
    'rating',
    'likes',
    'alphabetical',
    'downloads',
  ];

  constructor(public movieService: MoviesService, public route: ActivatedRoute) {

    console.log(this.moviesAdv);

    this.route.params.subscribe((params) => {
      if (params.text) {
        this.search = params.text;
        this.terms = this.search;
        // console.log(params);
        this.searchMovie();
      }
    });
  }

  ngOnInit() {}

  searchMovie() {
    setTimeout(() => {
      this.loading = false;
      if (this.search.length === 0) {
        return;
      }

      this.movieService.getSearch(this.search).subscribe((data) => {
        console.log(data);
      });
    }, 2000);

    this.loading = true;
  }
}
