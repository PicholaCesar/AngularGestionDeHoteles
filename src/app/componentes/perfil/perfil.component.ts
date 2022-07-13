import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css'],
  providers:[UsuarioService]
})
export class PerfilComponent implements OnInit {
  public token
  public aaraydemiperfi

  constructor(public _user: UsuarioService) {

    
    this.aaraydemiperfi = new Usuario('','','','','','','','')

    this.token = this._user.getToken();
   }

  ngOnInit(): void {
    this.obtnerPerfil()
  }

  obtnerPerfil(){
    this._user.obtenerPerfil(this.token).subscribe(
      (respuesta)=>{
      
      this.aaraydemiperfi = respuesta.perfil
      console.log(this.aaraydemiperfi)

      },(error)=>{
        console.log(<any>error)
      }
    )
  }

  actualizar(){
    this._user.editarPerfil(this.token, this.aaraydemiperfi).subscribe((respuesta)=>{
     console.log(respuesta)
     Swal.fire({
      icon: 'success',
      text:'Tu perfil fue Actulizado'
     })
     this.obtnerPerfil()
     
    },(error)=>{
      console.log(<any>error)
    })
  }

  eliminarperfil(id){
    this._user.eliminarCuenta(id).subscribe(
      (respuesta)=>{
      console.log(respuesta)
      },(error)=>{
        console.log(<any>error)
      }
    )
  }

}
