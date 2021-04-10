import { Component, Input, OnInit } from '@angular/core';

import { movie } from 'src/app/interfaces/cartelera.response';

import { Router } from '@angular/router';

@Component({
  selector: 'app-peliculas-poster-grid',
  templateUrl: './peliculas-poster-grid.component.html',
  styleUrls: ['./peliculas-poster-grid.component.css']
})
export class PeliculasPosterGridComponent implements OnInit {

  @Input() movies: movie[];

  constructor( private router: Router ) { }

  ngOnInit(): void { }

  onMovieClick( movie : movie ){
    this.router.navigate(['/pelicula', movie.id ]);
  }
}
