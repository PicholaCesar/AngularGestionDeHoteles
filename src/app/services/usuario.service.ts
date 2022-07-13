import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  public url:String= 'http://localhost:3000/api'
  public headersVariable = new HttpHeaders().set('content-type','application/json')
  public token
  public identidad

  constructor(public _http: HttpClient) { }

  login(usuario, obtenerToken = null):Observable<any>{

    if(obtenerToken != null){
      usuario.obtenerToken = obtenerToken
    }

    let parametros = JSON.stringify(usuario)

    return this._http.post(this.url+'/login', parametros,{headers: this.headersVariable})
  }

  getToken(){

    var token2 = localStorage.getItem('token');
    if(token2 != undefined){
      this.token = token2;
      
    }else{
      this.token = '';
    }

    return this.token
  }


  getIdentidad(){
        var identidad2 = JSON.parse(localStorage.getItem('identodad'))
        if(identidad2 != undefined){
          this.identidad = identidad2
        }else{
          this.identidad = null
        }
         return this.identidad
  }

//registro de UsuarioService

agregarUsuario(modeloUsuario: Usuario):Observable<any>{

   var parametros = JSON.stringify(modeloUsuario);

  return this._http.post(this.url + '/registrarusuario',parametros,{headers: this.headersVariable})
}

listarUsuarios(token):Observable<any>{

  let header = this.headersVariable.set('Authorization', token)

  return this._http.get(this.url + '/obtenerUsurios',{headers: header})
}

obtenerPerfil(token):Observable<any>{


 let variableToken = this.headersVariable.set('Authorization', token)
  return this._http.get(this.url+'/obtenerperfil',{headers: variableToken})
}

editarPerfil(token, modeloUsuario):Observable<any>{

  let parametros = JSON.stringify(modeloUsuario)
  let tokess = this.headersVariable.set('Authorization', token)

  return this._http.put(this.url+'/editarUsuario',parametros,{headers: tokess})
}

eliminarCuenta(id):Observable<any>{

  return this._http.delete(this.url+'/eliminarperfil/'+id,{headers: this.headersVariable})
 }

}
