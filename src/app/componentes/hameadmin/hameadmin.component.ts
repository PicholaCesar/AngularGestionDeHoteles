import { Component, OnInit } from '@angular/core';
import { ReservacionService } from 'src/app/services/reservacion.service';

@Component({
  selector: 'app-hameadmin',
  templateUrl: './hameadmin.component.html',
  styleUrls: ['./hameadmin.component.css'],
  providers:[ReservacionService]
})
export class HameadminComponent implements OnInit {
  public reserGeneral: []

  constructor(public _reser: ReservacionService) { }

  ngOnInit(): void {
    this.reservacion()
  }

  reservacion(){
    this._reser.reservacionGeneral().subscribe(
      (respuesta)=>{
        console.log(respuesta.listado)
        this.reserGeneral = respuesta.listado
      },(error)=>{
        console.log(<any>error)
      }
    )
  }

}
