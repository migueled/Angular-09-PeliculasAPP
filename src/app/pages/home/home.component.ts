import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { movie } from 'src/app/interfaces/cartelera.response';
import { PeliculasService } from '../../services/peliculas.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit, OnDestroy {
  
    public moviesSlideShow: movie[] = [];
    public movies: movie[]          = [];
    
    constructor( private peliculasServices : PeliculasService ) { }

    @HostListener('window: scroll', ['$event'])

    onScroll() {
        const posicion = (  document.documentElement.scrollTop || document.body.scrollTop ) + 1300;
        const max      = (document.documentElement.scrollHeight || document.body.scrollHeight);

        if( posicion > max ) {
            if( this.peliculasServices.cargando ){ return ; }
      
            this.peliculasServices.getCartelera().subscribe( 
                data => {
                    this.movies.push( ...data );
                }
            );
        }
    }


    ngOnInit(): void {
        this.peliculasServices.getCartelera()
            .subscribe( ( data ) => {
                this.moviesSlideShow  = data;
                this.movies           = data;
            }
        );
    }

    ngOnDestroy() {
        this.peliculasServices.resetCarteleraPage();
    }

}
