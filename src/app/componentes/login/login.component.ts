import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuarioModel: Usuario;

  constructor(public router:Router,public _Usuario: UsuarioService) {
    this.usuarioModel=new Usuario('','','','','','','','')
   }

  ngOnInit(): void {
  }

  getToken(){
    this._Usuario.login(this.usuarioModel, 'true').subscribe(
      (respuesta)=>{
      console.log(respuesta.token)
      /* localStorage.setItem("Toiken" , respuesta.token) */
      localStorage.setItem("token",respuesta.token)
      },(error)=>{
        console.log(<any>error)
      })
  }

  login(){
    this._Usuario.login(this.usuarioModel).subscribe(
      (respuesta)=>{
        console.log(respuesta.usuario.rol)
        localStorage.setItem('identodad', JSON.stringify(respuesta.usuario))
        this.getToken();

        if(respuesta.usuario.rol == 'AdminDeAPP'){
          this.router.navigate(['/hoteles'])
        }
        if(respuesta.usuario.rol == 'Usuario'){
           this.router.navigate(['/homeusuario'])
        }

        if(respuesta.usuario.rol == 'AdminDeHotel'){
          this.router.navigate(['/habitaciones'])
        }
 
       
       
      },
      (error)=>{
        Swal.fire({
          icon: 'info',
          text: error.error.mensaje
        })
        console.log(<any>error)
      })


  }


}
