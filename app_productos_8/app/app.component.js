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
var productos_service_1 = require('./productos/productos.service');
var AppComponent = (function () {
    function AppComponent() {
        this.tituloPagina = "Demo de Gestión de Productos";
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'gestion-productos',
            template: "\n            <h1>{{tituloPagina}}</h1>\n            <a class=\"btn btn-info\" [routerLink] = \"['']\">Inicio</a>\n            <a class=\"btn btn-info\" [routerLink] = \"['listado']\">Lista Productos</a>\n            <br/><br/>\n            <router-outlet></router-outlet> \n            ",
            providers: [productos_service_1.ServicioProductos]
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map