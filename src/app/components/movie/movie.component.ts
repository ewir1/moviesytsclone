import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from 'src/app/services/movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss'],
  })
export class MovieComponent implements OnInit {
  movieyts: any;

  bgImage: any[] = [];

  images: string;

  cast: any[] = [];

  validCast: boolean;

  castImage: any;

  validImage: any;

  loading: boolean;

  search = '';

  regresarA = '';

  constructor(private movieService: MoviesService, public route: ActivatedRoute) {
    this.route.params.subscribe((parametros) => {
      this.getImageBg(parametros.id);

      this.regresarA = parametros['pag'];

      if (parametros['search']) {
        this.search = parametros['search'];
      }

      this.movieService.getMovie(parametros['id']).subscribe((movie) => {
        setTimeout(() => {
          this.loading = false;

          this.movieyts = movie.data.movie;
          console.log(this.movieyts);

          this.cast = movie.data.movie.cast;

          if (this.cast === undefined) {
            this.validCast = true;
          } else {
            this.validCast = false;
          }
        }, 3000);

        this.loading = true;
      });
    });
  }

  ngOnInit() {}

  getImageBg(id: string) {
    this.movieService.getImage(id).subscribe((bgImage: any) => {
      this.bgImage = bgImage.data.movie.background_image;
    });
  }
}
