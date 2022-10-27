import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { JugadorListadoComponent } from './jugadores/jugador-listado/jugador-listado.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistrarComponent } from './componentes/registrar/registrar.component';
import { PassComponent } from './componentes/pass/pass.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registrar', component: RegistrarComponent},
  {path: 'jugar', component: JugadorListadoComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
