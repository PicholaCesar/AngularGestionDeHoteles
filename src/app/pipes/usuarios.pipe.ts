import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'usuarios'
})
export class UsuariosPipe implements PipeTransform {

  transform(Usuarios:any, buscar:any){
    if(!buscar){
      return Usuarios
    }else{
      return Usuarios.filter(usuario=>{
        return usuario.nombreUsuario.toLowerCase().includes(buscar.toLowerCase())
      })
    }
    
  }

}
