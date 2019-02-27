import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-browser-movies',
  templateUrl: './browser-movies.component.html',
  styleUrls: ['./browser-movies.component.scss'],
  })
export class BrowserMoviesComponent implements OnInit {
  search: string;

  // searchAdv: string;

  searchMovieAdv: string;

  loading = false;

  movies: any[] = [];

  moviesAdv = {
    term: '',
    quality: '',
    genre: '',
    rating: '',
    orderby: '',
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

  constructor(
    public movieService: MoviesService,
    public route: ActivatedRoute,
    public router: Router,
  ) {
    // console.log(this.moviesAdv);

    this.route.params.subscribe((params) => {
      if (params.text) {
        this.search = params.text;
        this.terms = this.search;
        // console.log(params);
        this.searchMovie();
      }
    });

    this.route.params.subscribe((params) => {
      if (params.term) {
        this.search = params.term;
        this.searchMovie();
      }
    });
  }

  ngOnInit() {
    this.getSearchMovieAdv();
  }

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

  getSearchMovieAdv() {
    setTimeout(() => {
      this.loading = false;

      this.movieService
        .getSearchAdv(
          this.moviesAdv.term,
          this.moviesAdv.quality,
          this.moviesAdv.genre,
          this.moviesAdv.rating,
          this.moviesAdv.orderby,
        )
        .subscribe((data: any) => data);
    }, 3000);

    console.log(this.moviesAdv);
    

    this.loading = true;
  }
}
