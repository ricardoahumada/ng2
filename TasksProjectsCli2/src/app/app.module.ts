import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import {HttpModule} from '@angular/http';
import { FormsModule }    from '@angular/forms';

import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { TareasComponent } from './tareas/tareas.component';
import { DetalleTareaComponent } from './tareas/detalletarea.component';
import { BotonBorrarComponent } from './tareas/botonborrar.component';
import { ProyectosComponent } from './proyectos/proyectos.component';

import { ListFilterPipe } from './commons/filter.pipe';
import { PageNotFoundComponent } from './commons/not-found.component';

import { TareasService } from './servicios/tareas.service';

import { routing } from './routing';


@NgModule({
  imports: [
    BrowserModule,FormsModule,routing,HttpModule,CoreModule.forRoot()
  ],
  declarations: [
    AppComponent,
    TareasComponent,
    DetalleTareaComponent,
    ProyectosComponent,
    ListFilterPipe,
    BotonBorrarComponent,
    PageNotFoundComponent
  ],
  providers:[TareasService],
  bootstrap: [ AppComponent ]
})

export class AppModule { }
