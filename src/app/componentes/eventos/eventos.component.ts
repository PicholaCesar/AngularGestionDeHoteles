import { ConstantPool } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { EventosService } from 'src/app/services/eventos.service';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css'],
  providers:[EventosService, UsuarioService, HotelesService]
})
export class EventosComponent implements OnInit {

 public arrayeventos 
 public localS

  constructor(public _eventos: EventosService, public _hotel: HotelesService) { 


     this.localS = localStorage.getItem('id')
  }

  ngOnInit(): void {
    this.listarEventos()
    console.log(this.localS)
  }

  listarEventos(){
     this._eventos.obtenerEventos(this.localS)  .subscribe(
    (respuesta)=>{
     console.log(respuesta)
     this.arrayeventos = respuesta.eventos
    },(error)=>{
      console.log(<any>error)
    })
  }

}
