import { Injectable } from '@angular/core';
import { Headers,Http, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { Tarea } from '../modelos/tarea';

@Injectable()
export class TareasService {
	private _tareas:Tarea[];/*[
		new Tarea(1,'Tarea1',2,1),
		new Tarea(2,'Tarea2',10,2),
		new Tarea(3,'Tarea3',22,3),
		new Tarea(4,'Tarea4',45,2)
	];*/
	
	private _observable: Observable<any>;

	constructor(private _http: Http){
	}

	getTareas(){
		return this._tareas;
	}

	getTareasFromApi(){
		// return this._http.get('api/tareas.json')
		return this._http.get('http://www.mocky.io/v2/5952e4992700004900b2a95f')
		.map((response: Response) => {
			this._tareas=<Tarea[]>response.json(); 
			return this._tareas;
		})
		.do((tareas: Tarea[]) => {
			console.log('getTareas...',this._tareas );
		})
		.catch(this.handleError);
	}

	findTareaById(tid:number){

		if(this._tareas) {
			console.log('Returning stored tasks:',this._tareas);
			return Observable.of( this._tareas.find( (value:Tarea)=> (value.tid==tid) ) );
		}else{
			console.log('Returning tasks from API');
			return this._http.get('http://www.mocky.io/v2/5952e4992700004900b2a95f')
			.map((response: Response) => {
				this._tareas=<Tarea[]>response.json(); 
				return this._tareas.find( (value:Tarea)=> (value.tid==tid) );
			} )
			.do((tarea: Tarea) => {
				console.log('getTarea...',tarea );
			})
			.catch(this.handleError);
		}
	}

	getData() {
		var url='api/tareas.json';

		if(this._tareas) {
			// if `data` is available just return it as `Observable`
			return Observable.of(this._tareas);
		} else if(this._observable) {
			// if `this.observable` is set then the request is in progress return the `Observable` for the ongoing request
			return this._observable;
		} else {
			let headers = new Headers();
			headers.append('Content-Type', 'application/json');
			// create the request, store the `Observable` for subsequent subscribers
			this._observable = this._http.get(url, {headers: headers})
			.map(response =>  {
				// when the cached data is available we don't need the `Observable` reference anymore
				this._observable = null;

				if(response.status == 400) {
					return "FAILURE";
				} else if(response.status == 200) {
					this._tareas = response.json();
					return this._tareas;
				}
				// make it shared so more than one subscriber can get the result
			})
			.share();
			return this._observable;
		}
	}

	addTarea(newtarea:Tarea){
		this._tareas.push(newtarea);

		let body = JSON.stringify(newtarea);
		let headers = new Headers();
    	// headers.append('Content-Type', this.constants.jsonContentType);

		console.log('Enviando Api...');
		return this._http.post('api/tareas.json',body,{ headers: headers })
		.map((response: Response) => {
			this._tareas=<Tarea[]>response.json(); 
			return true;} )
		.catch(this.handleError);
	}

	private handleError(error: Response) {
		console.error(error);
		return Observable.throw(error.json().error || 'Server error');
	}
}
