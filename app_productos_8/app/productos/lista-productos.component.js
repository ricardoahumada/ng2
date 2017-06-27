"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var productos_service_1 = require('./productos.service');
var ListaProductosComponent = (function () {
    function ListaProductosComponent(_servicioProductos) {
        this._servicioProductos = _servicioProductos;
        this.imageWidth = 50;
        this.imageMargin = 3;
        this.imageVisible = true;
        this.filtro = '';
    }
    ListaProductosComponent.prototype.mostrarImagen = function () {
        this.imageVisible = !this.imageVisible;
    };
    ListaProductosComponent.prototype.ngOnInit = function () {
        var _this = this;
        // console.log("Ejecutando OnInit");
        this._servicioProductos.leerProductos().
            subscribe(function (productos) { return _this.productos = productos; }, function (error) { return _this.mensajeError = error; });
    };
    ListaProductosComponent.prototype.onRatingClicked = function (message) {
        alert(message);
    };
    ListaProductosComponent = __decorate([
        core_1.Component({
            selector: 'lista-productos',
            templateUrl: 'app/productos/lista-productos.component.html',
            styleUrls: ['app/productos/lista-productos.component.css']
        }), 
        __metadata('design:paramtypes', [productos_service_1.ServicioProductos])
    ], ListaProductosComponent);
    return ListaProductosComponent;
}());
exports.ListaProductosComponent = ListaProductosComponent;
//# sourceMappingURL=lista-productos.component.js.map