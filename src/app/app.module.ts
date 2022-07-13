import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { HabitacionesComponent } from './componentes/habitaciones/habitaciones.component';
import { EventosComponent } from './componentes/eventos/eventos.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { MenuBarComponent } from './componentes/menu-bar/menu-bar.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HomeusuarioComponent } from './componentes/homeusuario/homeusuario.component';
import { HameadminComponent } from './componentes/hameadmin/hameadmin.component';
import { UsuariosComponent } from './componentes/usuarios/usuarios.component';
import { HotelesComponent } from './componentes/hoteles/hoteles.component';
import { ReservacionesComponent } from './componentes/reservaciones/reservaciones.component';
import { NavadminhotelComponent } from './componentes/navadminhotel/navadminhotel.component';
import { NavUsuarioComponent } from './componentes/nav-usuario/nav-usuario.component';
import { HistoriayoComponent } from './componentes/historiayo/historiayo.component';
import { PerfilComponent } from './componentes/perfil/perfil.component';
import { GraficaComponent } from './componentes/grafica/grafica.component';
import { NgChartsModule } from 'ng2-charts';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
    HabitacionesComponent,
    EventosComponent,
    MenuComponent,
    MenuBarComponent,
    HomeusuarioComponent,
    HameadminComponent,
    UsuariosComponent,
    HotelesComponent,
    ReservacionesComponent,
    NavadminhotelComponent,
    NavUsuarioComponent,
    HistoriayoComponent,
    PerfilComponent,
    GraficaComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgChartsModule,
  
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

