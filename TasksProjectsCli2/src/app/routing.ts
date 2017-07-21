import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TareasComponent } from './tareas/tareas.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { PageNotFoundComponent } from './commons/not-found.component';

const appRoutes: Routes = [
  { path: 'tareas', component: TareasComponent },
  { path: 'tareas/:tid', component: DetalleTareaComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: '',redirectTo: '/tareas',pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);