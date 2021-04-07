import { Component, OnInit } from '@angular/core';
import { movie } from 'src/app/interfaces/cartelera.response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public movies: movie[] = [];

  constructor(private peliculasServices:PeliculasService) { }

  ngOnInit(): void {
    this.peliculasServices.getCartelera()
    .subscribe( ( data ) => this.movies = data.results );
  }

}
