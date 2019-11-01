import { Component} from '@angular/core';
import { MoviesService } from '../../providers/movies.service';


@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {
  public busqueda: string;
  public result: [] = [];
  url = 'http://image.tmdb.org/t/p/w300';
  constructor(private service: MoviesService) {
  }
  buscaMovie() {
    this.service.buscar_pelicula(this.busqueda).subscribe((res: any) => {
      this.result = res.results;
      console.log(this.result);
    });
  }
}
