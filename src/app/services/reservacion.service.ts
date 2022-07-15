import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { reservacion } from '../models/reservacion.model';

@Injectable({
  providedIn: 'root'
})
export class ReservacionService {

  public url: String = 'https://gestiondehoteles.herokuapp.com/api'
  public headersVariable = new HttpHeaders().set('content-type','application/json')
  
  constructor(public _http: HttpClient) { }

  reservacion(modeloReserva: reservacion, token):Observable<any>{
    let parametros = JSON.stringify(modeloReserva)
    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.post(this.url+'/reserva', parametros,{headers: headersToken})
  }

  listarReservacion(token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', token)

    return this._http.get(this.url +'/reservaciones',{headers: headersToken})
  }

  obtenermisreservaciones(token):Observable<any>{

    let headersToken = this.headersVariable.set('Authorization', token )

    return this._http.get(this.url+'/mireservacion',{headers: headersToken})
  }

  reservacionGeneral():Observable<any>{
    return this._http.get(this.url+'/reservageneral',{headers: this.headersVariable})
  }

}
