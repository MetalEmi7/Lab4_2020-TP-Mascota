import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CargaMascotaComponent } from './Componentes/carga-mascota/carga-mascota.component';
import { ListadoMascotaComponent } from './Componentes/listado-mascota/listado-mascota.component';
import { MascotaComponent } from './Componentes/mascota/mascota.component';

import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CargaMascotaComponent,
    ListadoMascotaComponent,
    MascotaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
