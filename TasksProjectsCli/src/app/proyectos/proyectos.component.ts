import { Component,NgModule } from '@angular/core';
import { Proyecto } from '../modelos/proyecto';
import { ProyectosService } from '../servicios/proyectos.service';
import { ListFilterPipe } from '../commons/filter.pipe';


@Component({
  selector: 'proyectos',
  templateUrl: './proyectos.component.html',
  providers:[ProyectosService,ListFilterPipe]
})

export class ProyectosComponent{
	
	proyectos:Proyecto[];/*=[
		new Proyecto(1,'Tarea1'),
		new Proyecto(2,'Tarea2'),
		new Proyecto(3,'Tarea3'),
		new Proyecto(4,'Tarea4')
	];*/

	constructor(private _ProyectosService:ProyectosService){
		// this.proyectos=_ProyectosService.getProyectos();
		_ProyectosService.getProyectosFromApi().subscribe(
			(proysfromapi:Proyecto[]) => {this.proyectos = proysfromapi;}
		);
	}

	hola(){
		alert('hola!');
	}

	isEnabled=true;

}