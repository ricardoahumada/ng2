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
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ServicioProductos = (function () {
    function ServicioProductos(_http) {
        this._http = _http;
        this._productosUrl = 'app/productos/Productos.json';
    }
    ServicioProductos.prototype.leerProductos = function () {
        return this._http.get(this._productosUrl).
            map(function (response) { return response.json(); }).
            do(function (datos) { return console.log('Info:' + JSON.stringify(datos)); }).
            catch(this.manejarError);
    };
    ServicioProductos.prototype.manejarError = function (error) {
        console.error(error);
        return Observable_1.Observable.throw(error.json().error || "Error del servidor");
    };
    ServicioProductos = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ServicioProductos);
    return ServicioProductos;
}());
exports.ServicioProductos = ServicioProductos;
//# sourceMappingURL=productos.service.js.map