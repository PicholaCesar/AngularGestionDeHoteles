import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css'],
  providers:[UsuarioService]
})
export class UsuariosComponent implements OnInit {

  public modeloUsuarioRegistrado
  public search

  public token

  constructor(public _usuarioServices: UsuarioService) { 

   this.token = this._usuarioServices.getToken();
  }

  ngOnInit(): void {

   this.listarUsuarios();
  }

  listarUsuarios(){
    this._usuarioServices.listarUsuarios(this.token).subscribe(
      (respuesta)=>{  
        this.modeloUsuarioRegistrado =respuesta.Usuarios
        console.log(this.modeloUsuarioRegistrado)
     
    },(error)=>{
     console.log(<any>error)
    })
  }

}
