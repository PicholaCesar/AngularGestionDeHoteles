import { Component, OnInit } from '@angular/core';
import { habitaciones } from 'src/app/models/habitaciones.model';
import { hoteles } from 'src/app/models/hotel.model';
import { reservacion } from 'src/app/models/reservacion.model';
import { HabitacionesService } from 'src/app/services/habitaciones.service';
import { HotelesService } from 'src/app/services/hoteles.service';
import { ReservacionService } from 'src/app/services/reservacion.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-homeusuario',
  templateUrl: './homeusuario.component.html',
  styleUrls: ['./homeusuario.component.css'],
  providers:[HotelesService, HabitacionesService,ReservacionService, UsuarioService]
})
export class HomeusuarioComponent implements OnInit {

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

  public modeloHotelesGet
  public modeloHabiutacion: habitaciones;
  public modeloreserva: reservacion
  public infoHotel
  public token
  public nombreHotel
  public buscar

  constructor(public _hoteles: HotelesService, 
              public _habitaciones: HabitacionesService, 
              public _reserva: ReservacionService,
              public _Usuario: UsuarioService) { 


                this.modeloreserva = new reservacion('','','','','')
  

                this.token = this._Usuario.getToken();
              }



  ngOnInit(): void {
    this.obtenerHoteles()
  }

  obtenerHotelID(idHotel){
  this._hoteles.obtenerhotelID(idHotel).subscribe(
  (respuesta)=>{
     this.infoHotel = respuesta.hotel
     this.nombreHotel =this.infoHotel.nombre
  },(error)=>{
    console.log(<any>error)
  })
  }

  obtenerHoteles(){
    this._hoteles.obtenerHoteles().subscribe(
    (respuesta)=>{
       this.modeloHotelesGet = respuesta.hoteles;
      
    },(error)=>{
      console.log(<any>error)

    })
  }


  listarHabitaciones(idHotel){

    this._habitaciones.listarHabitaciones(idHotel).subscribe(
      (respuesta)=>{
       this.modeloHabiutacion = respuesta.habitacion;
      },(error)=>{
        console.log(<any>error)
      })
  }


  reservacion(){
    this.modeloreserva.nombreHotel = this.nombreHotel
    this._reserva.reservacion(this.modeloreserva, this.token).subscribe(
      (respuesta)=>{
        console.log(respuesta)
        this.modeloreserva.cuarto = '',
        this.modeloreserva.fechaReserva= '',
        this.modeloreserva.hora= ''
        this.Toast.fire({
          icon: 'success',
          title: 'La reservacion gurdada correctamente'
        })

     
      },(error)=>{
        console.log(<any>error)
      })
  }

  
  listarEventos(idhotel){
    this._hoteles.obtenerhotelID(idhotel).subscribe(
   (respuesta)=>{
     console.log(respuesta.hotel._id)
     localStorage.setItem('id', (respuesta.hotel._id))
   },(error)=>{
     console.log(<any>error)

   })
 }



}
