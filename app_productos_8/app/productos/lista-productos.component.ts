import { Component, OnInit } from '@angular/core';
import { NgIf, NgFor } from '@angular/common';
import { IProducto } from './Producto';
import { ServicioProductos } from './productos.service';

@Component({
    selector: 'lista-productos',
    templateUrl: 'app/productos/lista-productos.component.html',
    styleUrls: ['app/productos/lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {
    imageWidth: number = 50;
    imageMargin: number = 3;
    imageVisible: boolean = true;
    filtro: string='';
    mensajeError: string;
    productos: IProducto[];

    constructor(private _servicioProductos: ServicioProductos){}

    mostrarImagen(): void {
        this.imageVisible = !this.imageVisible;
    }
    
    ngOnInit() {
        // console.log("Ejecutando OnInit");
        this._servicioProductos.leerProductos().
             subscribe( 
                 productos => this.productos = productos,
             error => this.mensajeError = <any>error
        ); 
    }
    onRatingClicked(message: string): void {
        alert(message);
    }
}

