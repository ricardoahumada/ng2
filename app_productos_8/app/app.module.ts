import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { Routing } from './app.routing';

import 'rxjs/Rx';

import { AppComponent }  from './app.component';
import { WelcomeComponent } from './home/welcome.component';

import { ListaProductosComponent } 
   from './productos/lista-productos.component';
import { FiltroProductosPipe } 
   from './productos/lista-productos.pipe';
import { StarComponent } from './shared/star.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule, Routing ],
  declarations: [ AppComponent, ListaProductosComponent, WelcomeComponent, 
                  FiltroProductosPipe, StarComponent ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
