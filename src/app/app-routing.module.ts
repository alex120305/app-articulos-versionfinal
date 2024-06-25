import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CargarArticuloComponent } from './componentes/cargar-articulo/cargar-articulo.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';

const routes: Routes = [
  {path:'Cargar-articulo',component:CargarArticuloComponent},
  {path:'login',component:LoginComponent},
  {path:'registro',component:RegistroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
