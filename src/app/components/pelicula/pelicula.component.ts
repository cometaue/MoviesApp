import { Component, Input} from '@angular/core';
import { MoviesService } from '../../providers/movies.service';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.css']
})
export class PeliculaComponent {
  @Input() personaje: any;
  url = 'http://image.tmdb.org/t/p/w500';
  id: any;
  origen: any;
  constructor(private movieservice: MoviesService, private route: ActivatedRoute, private back: Router) {
    route.params.subscribe((data: any) => {
      this.id = data.id;
      this.origen = data.origen;
    });
    movieservice.get_pelicula(this.id).subscribe(resp => {
    this.personaje = resp;
    });
  }
  regresar() {
  this.back.navigateByUrl(`${this.origen}`);
  }
}
