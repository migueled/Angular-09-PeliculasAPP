import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';
import { movie } from 'src/app/interfaces/cartelera.response';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  public movies: movie[] = [];
  public texto : string = '';

  constructor( private activatedRoute : ActivatedRoute,
               private peliculasService : PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => {
        this.texto = params.texto;
        this.peliculasService.buscarPelicula( params.texto )
            .subscribe( data => this.movies = data );
      }
    );
  }

}
