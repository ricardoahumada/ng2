import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { Tarea } from '../modelos/tarea';
import { TareasService } from '../servicios/tareas.service';
import { ListFilterPipe } from '../commons/filter.pipe';

@Component({
  selector: 'boton-borrar',
  templateUrl: './botonborrar.component.html',
})

export class BotonBorrarComponent implements OnChanges{
	@Input() tid: number;
	@Output() borrarClicked: EventEmitter<string> = new EventEmitter<string>();

	ngOnChanges(sc:any): void {
        console.log(sc);
    }

	borraTarea(tid:string) {
		console.log('Borrar TID:',tid);
        this.borrarClicked.emit(tid);
    }

}