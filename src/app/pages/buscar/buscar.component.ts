import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styleUrls: ['./buscar.component.css']
})
export class BuscarComponent implements OnInit {

  constructor( private activatedRoute : ActivatedRoute,
               private peliculasService : PeliculasService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(
      params => this.peliculasService.buscarPelicula( params.texto )
          .subscribe( data => console.log(data))
    );
  }

}
