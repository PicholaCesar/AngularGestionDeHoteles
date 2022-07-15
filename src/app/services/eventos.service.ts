import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventosService {

 public url: String = 'https://gestiondehoteles.herokuapp.com/api'
 public headersVariable = new HttpHeaders().set('content-type','application/json')


  constructor(public _http: HttpClient) { }

obtenerEventos(idhotel):Observable<any>{

  return this._http.get(this.url+'/listareventos/' + idhotel, {headers: this.headersVariable})
}

}
