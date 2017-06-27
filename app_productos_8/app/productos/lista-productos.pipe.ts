import { PipeTransform, Pipe } from "@angular/core";
import { IProducto } from './producto';

@Pipe({ name: 'filtroProductos'})
export class FiltroProductosPipe implements PipeTransform {
    transform(value: IProducto[], args: string[]): IProducto[] {
        let filtro: string = args[0] ? args[0].toLocaleLowerCase() : null;
        return filtro ? value.filter( (producto: IProducto) => 
             producto.Producto.toLocaleLowerCase().indexOf(filtro) != -1) : value;
    };
}