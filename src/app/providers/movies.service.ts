import { Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  private apiKEY = 'a291bf0447c9e2194e9640c118273932';
  private apiURL = 'https://api.themoviedb.org/3';
  private parametros: HttpParams;
  constructor(private http: HttpClient) { }
  get_populares() {
   return this.http.get(`${this.apiURL}/discover/movie?sort_by=popularity.desc&api_key=${this.apiKEY}&language=es`);
  }
  get_actual() {
   return this.http.get(`${this.apiURL}/discover/movie?
   primary_release_date.gte=2019-01-01&primary_release_date.lte=2019-05-29&api_key=${this.apiKEY}&language=es`);
  }
  get_niños() {
   return this.http.get(`${this.apiURL}/discover/movie?
   certification_country=US&certification=R&sort_by=revenue.desc&with_cast=3896&api_key=${this.apiKEY}&language=es`);
  }
  get_pelicula(id) {
   return this.http.get(`${this.apiURL}/movie/${id}?api_key=${this.apiKEY}&language=es`);
  }
  buscar_pelicula(busc) {
    this.parametros = new HttpParams().set('query', `${busc}`);
    return this.http.get(`https://api.themoviedb.org/3/search/movie/?api_key=${this.apiKEY}&language=es&page=1&
    include_adult=false`, {params: this.parametros});

  }
}
