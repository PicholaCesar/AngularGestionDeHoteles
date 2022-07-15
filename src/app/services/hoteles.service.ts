import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { hoteles } from '../models/hotel.model';

@Injectable({
  providedIn: 'root'
})
export class HotelesService {

  public url: String = 'https://gestiondehoteles.herokuapp.com/api'
  public headersVariable = new HttpHeaders().set('content-type','application/json')


  constructor(public _http: HttpClient) { }


  obtenerHoteles():Observable<any>{

    return this._http.get(this.url +'/obtenerhotel',{headers: this.headersVariable })
  }

  agregarHoteles(modeloHotel: hoteles, token):Observable<any>{

    let parametros = JSON.stringify(modeloHotel);
    let headersToken = this.headersVariable.set('Authorization', token)


    return this._http.post(this.url +'/agregarhotel', parametros,{headers: headersToken})
  }


  obtenerhotelID(idhotel):Observable<any>{


    return this._http.get(this.url +'/obtehotel/'+ idhotel, {headers: this.headersVariable})

  }


}
