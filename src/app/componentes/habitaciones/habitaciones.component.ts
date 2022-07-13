import { Component, OnInit } from '@angular/core';
import { habitaciones } from 'src/app/models/habitaciones.model';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-habitaciones',
  templateUrl: './habitaciones.component.html',
  styleUrls: ['./habitaciones.component.css'],
  providers:[HabitacionesService, UsuarioService]
})
export class HabitacionesComponent implements OnInit {


  public Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer)
      toast.addEventListener('mouseleave', Swal.resumeTimer)
    }
  })
  
 

  public ArrayHabitaciones
  public identidad
  public modeloHanitacionPOS
  public token

  constructor(public _habitacion: HabitacionesService, public _identidad: UsuarioService) { 

    this.modeloHanitacionPOS = new habitaciones('',0,true)

   this.token = this._identidad.getToken()
   this.identidad = JSON.parse(localStorage.getItem('identodad'))
  }

  ngOnInit(): void {
    this.obtenerHabitacion();
  }

  obtenerHabitacion(){
  this._habitacion.listarHabitaciones(this.identidad._id).subscribe(
      (respuesta)=>{
         this.ArrayHabitaciones = respuesta.habitacion
         console.log(respuesta)
      },(error)=>{
             console.log(<any>error)
      }) 
  }

  cancelarrecerva(nombre){
    this._habitacion.cancelarHabitacion(nombre).subscribe(
      (respuesta)=>{
        console.log(respuesta)
        this.obtenerHabitacion();
      },(error)=>{
        console.log(<any>error)
      }
    )
  }

 obtenerFactura(nombre){
  this._habitacion.obtenefactura(nombre).subscribe(
    (respuesta)=>{
 console.log(respuesta)
    },(error)=>{
      console.log(<any>error)
    }
  )
 }

 agregarhabitacion(){
  this._habitacion.agreagrHabitacion(this.modeloHanitacionPOS, this.token).subscribe((respuesta)=>{
    console.log(respuesta)
    this.obtenerHabitacion()
    this.Toast.fire({
      icon: 'success',
      title: 'Habitacion Guardado Correctamente'
    })
  },(error)=>{
    console.log(<any>error)
  })
 }

 
}
