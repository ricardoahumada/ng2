import { Component } from '@angular/core';
import { ServicioProductos } from './productos/productos.service';

@Component({
  selector: 'gestion-productos',
  template: `
            <h1>{{tituloPagina}}</h1>
            <a class="btn btn-info" [routerLink] = "['']">Inicio</a>
            <a class="btn btn-info" [routerLink] = "['listado']">Lista Productos</a>
            <br/><br/>
            <router-outlet></router-outlet> 
            `,
  providers: [ ServicioProductos ]
})
export class AppComponent {
    tituloPagina: string = "Demo de Gestión de Productos";
}
