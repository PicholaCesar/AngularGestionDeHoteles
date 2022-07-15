import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-reservaciones',
  templateUrl: './reservaciones.component.html',
  styleUrls: ['./reservaciones.component.css'],
  providers:[ReservacionService, UsuarioService]
})
export class ReservacionesComponent implements OnInit {
  public listaReservacion
  public token
  public buscar

  constructor(public _reservacion: ReservacionService, public _usuario: UsuarioService) {



    this.token = this._usuario.getToken()
   }

  ngOnInit(): void {
    this.listadoReservacion()
  }


  listadoReservacion(){
    this._reservacion.listarReservacion(this.token).subscribe(
    (respuesta)=>{
      this.listaReservacion = respuesta.reservacion
      console.log(respuesta.reservacion)
    
    },(error)=>{
      console.log(<any>error)
    })
  }

}
