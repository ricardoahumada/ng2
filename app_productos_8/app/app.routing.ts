import { Routes, RouterModule } from '@angular/router';
import { ListaProductosComponent } from './productos/lista-productos.component';
import { WelcomeComponent } from './home/welcome.component';

const APP_ROUTES: Routes = [
    { path: "",        component: WelcomeComponent},
    { path: "listado", component: ListaProductosComponent}
]
export const Routing = RouterModule.forRoot(APP_ROUTES);