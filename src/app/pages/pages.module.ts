import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactanosComponent } from './contactanos/contactanos.component';
import { HomeComponent } from './home/home.component';
import { PortafolioComponent } from './portafolio/portafolio.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NotFoundComponent } from './not-found/not-found.component';



@NgModule({
  declarations: [
    ContactanosComponent,
    HomeComponent,
    PortafolioComponent,
    ServiciosComponent,
    NotFoundComponent
  ],

  exports:[
    ContactanosComponent,
    HomeComponent,
    PortafolioComponent,
    ServiciosComponent,
    NotFoundComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
