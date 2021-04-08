import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carteleraResponse } from '../interfaces/cartelera.response';

import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  private url:string='https://api.themoviedb.org/3';

  private carteleraPage = 1 ;

  get params(){
    return {
      api_key:   '74f7e4f50840bfb26f850c13c943b473',
      language:  'en-US',
      page:      this.carteleraPage.toString()
    }
  }
  constructor(private http: HttpClient) { }

  getCartelera() : Observable < carteleraResponse >{
    return this.http.get< carteleraResponse >(`${ this.url }/movie/now_playing`, { params : this.params })
    .pipe(
      tap( () => this.carteleraPage += 1 )
    );
  }

}
