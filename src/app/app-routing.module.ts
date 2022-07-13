import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { HameadminComponent } from './componentes/hameadmin/hameadmin.component';
import { HistoriayoComponent } from './componentes/historiayo/historiayo.component';
import { HomeComponent } from './componentes/home/home.component';
import { HomeusuarioComponent } from './componentes/homeusuario/homeusuario.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { LoginComponent } from './componentes/login/login.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  { path: 'habitaciones', component: HabitacionesComponent },
  {path: "login", component: LoginComponent},
  {path:"registro", component: RegistroComponent},
  {path: 'homeusuario', component: HomeusuarioComponent},
  {path: 'hameadmin', component: HameadminComponent},
  {path: 'usuario', component:UsuariosComponent},
  {path: 'hoteles', component:HotelesComponent},
  {path: 'reservacion', component: ReservacionesComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'conssumo', component:HistoriayoComponent},
  {path: 'perfil', component:PerfilComponent},
  {path: 'grafica', component:GraficaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
