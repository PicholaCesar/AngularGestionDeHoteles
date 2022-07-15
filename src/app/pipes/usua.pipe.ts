import { Pipe, PipeTransform } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Pipe({
  name: 'usua'
})
export class UsuaPipe implements PipeTransform {

  transform(Usuarios:any, search:any){
   if(!search){
    return Usuarios
   }else
    return Usuarios.filter(usuario=>{
      return usuario.nombre.toLowerCase().includes(search.toLowerCase())
    })
  }

}
