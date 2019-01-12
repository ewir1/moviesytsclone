import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
  })
export class MoviesService {
  private url = 'https://yts.am/api/v2/';

  moviesSearch: any[] = [];

  movieSearchAdv: any[] = [];

  constructor(private http: Http) {}

  getListMovies() {
    const urlMovies = `${this.url}list_movies.json?limit=12`;
    return this.http.get(urlMovies).pipe(map((res: any) => res.json()));
  }

  getListNewMovies() {
    const urlMovies = `${
      this.url
    }list_movies.json?sort_by=download_count&sort_by=like_count&sort_by=year`;
    return this.http.get(urlMovies).pipe(map((res: any) => res.json()));
  }

  getList3dMovies() {
    const urlMovies = `${this.url}list_movies.json?limit=8&quality=3D`;
    return this.http.get(urlMovies).pipe(map((res: any) => res.json()));
  }

  getMovie(id: string) {
    const urlMovie = `${this.url}movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;
    return this.http.get(urlMovie).pipe(map((res: any) => res.json()));
  }

  getImage(id: string) {
    const urlMovie = `${this.url}movie_details.json?movie_id=${id}&with_images=true&with_cast=true`;
    return this.http.get(urlMovie).pipe(map((res: any) => res.json()));
  }

  getSearch(text: string) {
    const url = `${this.url}list_movies.json?query_term=${text}`;
    return this.http.get(url).pipe(
      map((res) => {
        this.moviesSearch = res.json().data.movies;
        // return res.json().data;
        console.log(this.moviesSearch);
      }),
    );
  }

  getSearchAdv(term: string, quality: string, genre: string, rating: string, year: boolean) {
    const url = `${
      this.url
    }query_term=${term}&quality=${quality}&genre=${genre}&minimum_rating=${rating}&order_by=${year}`;
    return this.http.get(url).pipe(
      map((res) => {
        this.movieSearchAdv = res.json().data.movies.title;
        console.log(this.movieSearchAdv);
      }),
    );
  }
}
