import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HotelesService } from 'src/app/services/hoteles.service';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-hoteles',
  templateUrl: './hoteles.component.html',
  styleUrls: ['./hoteles.component.css'],
  providers: [HotelesService,UsuarioService]
})
export class HotelesComponent implements OnInit {

  

  public arraymodelHoteles
  public modeloHotelesPos
  public token

  public  Toast = Swal.mixin({
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


  constructor(public _hoteles: HotelesService, public _usuario: UsuarioService) {

    this.modeloHotelesPos= new Usuario('','', '', '','','','','')

      this.token = this._usuario.getToken();
   }

  ngOnInit(): void {

    this.listarHoteles()
  }


  listarHoteles(){
    this._hoteles.obtenerHoteles().subscribe(
    (respuesta)=>{
      this.arraymodelHoteles = respuesta.hoteles
      console.log(this.arraymodelHoteles)

    },(error)=>{
 
      console.log(<any>error)
    })
    }

  agregarHotel(){
    this._hoteles.agregarHoteles(this.modeloHotelesPos, this.token).subscribe(
    (respuesta)=>{
      this.Toast.fire({
        icon: 'success',
        title: 'EL hotele Guardado Correctamente'
      })
    this.listarHoteles()
    this.modeloHotelesPos = new Usuario('','','','','','','','')

    },(error)=>{
      console.log(<any>error)
      Swal.fire({
        icon: 'warning',
        text: error.error.mensaje
      })
    })
  }

  }


