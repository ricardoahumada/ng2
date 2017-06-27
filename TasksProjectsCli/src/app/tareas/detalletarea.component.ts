import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { ActivatedRoute } from '@angular/router';

import { Tarea } from '../modelos/tarea';
import { TareasService } from '../servicios/tareas.service';

@Component({
  selector: 'detalle-tarea',
  templateUrl: './detalletarea.component.html'/*,
  providers:[TareasService]*/
})

export class DetalleTareaComponent implements OnInit{
  private _sub:any;
  private _tarea:Tarea;

  constructor(private route: ActivatedRoute,private _TareasService:TareasService) {
  }

  ngOnInit() {
    // Subscribe to route params
    this._sub = this.route.params.subscribe(params => {
      console.log('params',params);
      let tid = params['tid'];
      this._TareasService.findTareaById(tid).subscribe(
        (tareafromapi:Tarea) => {this._tarea = tareafromapi;}
      );
    });
  }

}