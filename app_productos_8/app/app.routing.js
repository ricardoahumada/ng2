"use strict";
var router_1 = require('@angular/router');
var lista_productos_component_1 = require('./productos/lista-productos.component');
var welcome_component_1 = require('./home/welcome.component');
var APP_ROUTES = [
    { path: "", component: welcome_component_1.WelcomeComponent },
    { path: "listado", component: lista_productos_component_1.ListaProductosComponent }
];
exports.Routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map