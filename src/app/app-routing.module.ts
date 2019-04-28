import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { ContactoComponent } from './contacto/contacto.component';
//import { RegistroComponent } from './registro/registro.component';
import { InformacionComponent } from './informacion/informacion.component';
//import { CicloviaComponent } from './info/ciclovia/ciclovia.component';
//import { PrestamoComponent } from './info/prestamo/prestamo.component';
//import { RegistrobiciComponent } from './info/registrobici/registrobici.component';
//import { ReglamentoComponent } from './info/reglamento/reglamento.component';

const routes: Routes = [
    {path:'noticias', component:NoticiasComponent},
    {path:'inicio', component: InicioComponent},
 //   {path:'registro', component: RegistroComponent},
    {path:'contacto', component: ContactoComponent},
    {path:'informacion', component: InformacionComponent},
 //   {path:'ciclovia', component: CicloviaComponent},
 //   {path:'prestamo', component: PrestamoComponent},
 //   {path:'registrobici', component: RegistrobiciComponent},
 //   {path:'reglamento', component: ReglamentoComponent},

    {path:'', component:InicioComponent},
    {path:'**', component: InicioComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
