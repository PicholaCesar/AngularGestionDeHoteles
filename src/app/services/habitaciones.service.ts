import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HabitacionesService {


  public url: String = 'https://gestiondehoteles.herokuapp.com/api'
  public headersVariable = new HttpHeaders().set('content-type','application/json')

  constructor(public _http: HttpClient) { }


  listarHabitaciones(idHotel):Observable<any>{

    return this._http.get(this.url+'/listarhabitacion/'+ idHotel, {headers: this.headersVariable})
  }

  cancelarHabitacion(nombrehab):Observable<any>{
    

    return this._http.put(this.url+'/cancelarReservacion/'+nombrehab,null,{headers: this.headersVariable})
  }


   obtenefactura(nombre):Observable<any>{

    return this._http.get(this.url+'/factura/'+ nombre, {headers: this.headersVariable})
   }

   agreagrHabitacion(modeloHabitacion, token):Observable<any>{

    let body = JSON.stringify(modeloHabitacion)
    let autenticacion = this.headersVariable.set('Authorization', token)

    return this._http.post(this.url+'/agregarhabitacion', body,{headers: autenticacion})
   }
  

}
