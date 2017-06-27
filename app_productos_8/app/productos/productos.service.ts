import { Injectable } from "@angular/core";
import { IProducto } from "./producto";
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable' ;

@Injectable()
export class ServicioProductos {
    private _productosUrl = 'app/productos/Productos.json';
    constructor(private _http: Http){}

    leerProductos(): Observable<IProducto[]> {
        return this._http.get(this._productosUrl).
               map( (response: Response) => <IProducto[]>response.json() ).
               do(datos => console.log('Info:' + JSON.stringify(datos))).
               catch(this.manejarError);
    }

    private manejarError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || "Error del servidor");
    }
}