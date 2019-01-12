import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ScrollingModule } from '@angular/cdk/scrolling';



// Modules
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';



// Components
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/header/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { BrowserMoviesComponent } from './components/browser-movies/browser-movies.component';
import { KeysPipe } from './pipes/keys.pipe';
import { MovieComponent } from './components/movie/movie.component';
import { NoimagePipe } from './pipes/noimage.pipe';
import { GalleryComponent } from './components/home/gallery.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    BrowserMoviesComponent,
    KeysPipe,
    MovieComponent,
    NoimagePipe,
    GalleryComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
