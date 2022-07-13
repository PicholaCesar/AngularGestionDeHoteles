import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-historiayo',
  templateUrl: './historiayo.component.html',
  styleUrls: ['./historiayo.component.css'],
  providers: [ReservacionService, UsuarioService]
})
export class HistoriayoComponent implements OnInit {
  public token
  public mireservacion

  constructor(public _reservacion: ReservacionService, public _Usuario: UsuarioService) {

    this.token = this._Usuario.getToken()
  }

  ngOnInit(): void {
    this.obtenermireservacion()
  }

  obtenermireservacion() {

    this._reservacion.obtenermisreservaciones(this.token).subscribe(
      (respuesta) => {
        
        this.mireservacion = respuesta.mireservacion
      }, (error) => {
        console.log(<any>error)
      }
    )
  }

}
