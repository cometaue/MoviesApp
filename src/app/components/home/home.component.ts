import { Component, Input} from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cartelera: any ;
  populares: any;
  nenes: any;
  url = 'http://image.tmdb.org/t/p/w400';
  constructor(private service: MoviesService, private router: Router) {
    service.get_actual().subscribe((resp: any) => {
      this.cartelera = resp.results;
    });
    service.get_populares().subscribe((resp: any) => {
      this.populares = resp.results;
    });
    service.get_niños().subscribe((resp: any) => {
      this.nenes = resp.results;
    });
   }
   bibliografia(id: any) {
   this.router.navigateByUrl(`pelicula/${id}/'home'`);
   }



}
