import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { carteleraResponse } from '../interfaces/cartelera.response';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  url:string='https://api.themoviedb.org/3/movie/now_playing?api_key=74f7e4f50840bfb26f850c13c943b473&language=en-US&page=1';

  constructor(private http: HttpClient) { }

  getCartelera() : Observable < carteleraResponse >{
    return this.http.get< carteleraResponse >( this.url );
  }

}
