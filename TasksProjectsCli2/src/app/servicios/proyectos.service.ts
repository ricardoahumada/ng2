import { Injectable } from '@angular/core';
import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Proyecto } from '../modelos/proyecto';

@Injectable()
export class ProyectosService {
	private _proyectos:Proyecto[]=[];
	constructor(private _http: Http){
	}

	getProyectos(){
		return [
			new Proyecto(1,'Tarea1'),
			new Proyecto(2,'Tarea2'),
			new Proyecto(3,'Tarea3'),
			new Proyecto(4,'Tarea4')
		];
	}

	getProyectosFromApi(){
		// return this._http.get('api/proyectos.json')
		return this._http.get('http://www.mocky.io/v2/5952e4c02700004400b2a960')
		.map((response: Response) => {
			this._proyectos=<Proyecto[]>response.json(); return this._proyectos;} )
		.do((proyectos: Proyecto[]) => {
			console.log('getTareas...',proyectos );
		})
		.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
