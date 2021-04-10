import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

import { MovieResponse } from 'src/app/interfaces/movie.response';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent implements OnInit {

  public movie : MovieResponse;

  constructor( private activatedRoute : ActivatedRoute,
               private peliculasService : PeliculasService ) { }

  ngOnInit(): void {
    const { id } = this.activatedRoute.snapshot.params//Mas datos en la url
    //const id = this.activatedRoute.snapshot.params.id
    this.peliculasService.getPeliculaDetalle( id ).subscribe( movie => this.movie = movie);
  }

}
