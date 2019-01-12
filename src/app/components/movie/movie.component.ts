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

  constructor(private movieService: MoviesService, public route: ActivatedRoute) {
    this.route.params.subscribe((parametros) => {
      this.getImageBg(parametros.id);

      this.movieService.getMovie(parametros.id).subscribe((movie) => {
        this.movieyts = movie.data.movie;
        console.log(this.movieyts);

        this.cast = movie.data.movie.cast;

        if (this.cast === undefined) {
          this.validCast = true;
        } else {
          this.validCast = false;
        }

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
