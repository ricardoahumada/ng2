import { Component,NgModule } from '@angular/core';

import { Tarea } from '../modelos/tarea';
import { TareasService } from '../servicios/tareas.service';
import { ApiService } from '../core/api.service';
import { ListFilterPipe } from '../commons/filter.pipe';

@Component({
  selector: 'tareas',
  templateUrl: './tareas.component.html'/*,
  providers:[TareasService]*/
})

export class TareasComponent{
	
	tareas:Tarea[];/*=[
		new Tarea(1,'Tarea1',2,1),
		new Tarea(2,'Tarea2',10,2),
		new Tarea(3,'Tarea3',22,3),
		new Tarea(4,'Tarea4',45,2)
	];*/

	onBorrarClicked(tid: string): void {
        console.log('Borrar tid de la lista:',tid);
        for (var i = 0; i < this.tareas.length; ++i) {
        	if(this.tareas[i].tid== parseInt(tid) ) this.tareas.splice(i,1);
        }
    }

	constructor(private _TareasService:TareasService, private _ApiService:ApiService){
		// this.tareas=_TareasService.getTareas();

		_TareasService.getTareasFromApi().subscribe(
			(tareasfromapi:Tarea[]) => {this.tareas = tareasfromapi;}
		);

		_ApiService.sayHello().subscribe(
			(val:string)=>{console.log('val from api:',val);}
		);
	}

	textoafiltrar='';

	newTask=new Tarea(0,'',0,0);

	onSubmit(){
		this.newTask.tid = Date.now();
		console.log("Enviando nueva tarea...",this.newTask);
		this._TareasService.addTarea(this.newTask).subscribe(
			(isok:boolean) => {console.log('Añadida!!',isok);}
		);
		this.newTask=new Tarea(0,'',0,0);
	}

}