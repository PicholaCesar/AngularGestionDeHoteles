import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
  providers:[UsuarioService]
})
export class RegistroComponent implements OnInit {

  public modeloUsuario: Usuario;

  constructor(public _servicioUsuario: UsuarioService, public router: Router) {
      
       this.modeloUsuario = new Usuario('','','','','','','','');

   }

  ngOnInit(): void {
  }

  agregarUsuario(){
    this._servicioUsuario.agregarUsuario(this.modeloUsuario).subscribe(
      (respuesta)=>{
       console.log(respuesta)
        Swal.fire({
          icon: 'success'	,
          title: 'La Cuenta Registrada Correctamente'	
        })
       this.router.navigate(['/login'])
       
      },(erro)=>{
        Swal.fire({
          icon: 'warning',
          title: erro.error.mensaje,
        })
        this.modeloUsuario.email = '',
        this.modeloUsuario.password = ''
       

      }
    )
  }

}
