import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosComponent } from './pages/contactanos/contactanos.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { ServiciosComponent } from './pages/servicios/servicios.component';

const routes: Routes = [
  {path:'', component: HomeComponent,},
  {path:'contact', component: ContactanosComponent,},
  {path:'portfolio', component: PortafolioComponent,},
  {path:'services', component: ServiciosComponent ,},
  {path:'404', component: NotFoundComponent,},
  {path:'**', redirectTo: '404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
