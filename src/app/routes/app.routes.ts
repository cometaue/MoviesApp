import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { BusquedaComponent } from '../components/busqueda/busqueda.component';
import { PeliculaComponent } from '../components/pelicula/pelicula.component';
import { AboutComponent } from '../components/about/about.component';

const ROUTES: Routes =
[
{path: 'home', component: HomeComponent},
{path: 'busqueda', component: BusquedaComponent},
{path: 'pelicula/:id/:origen', component: PeliculaComponent},
{path: 'about', component: AboutComponent},
{path: '**', redirectTo: 'home'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(ROUTES, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutes { }
