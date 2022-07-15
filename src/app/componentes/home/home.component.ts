import { Component, OnInit } from '@angular/core';
import { hoteles } from 'src/app/models/hotel.model';
import { HotelesService } from 'src/app/services/hoteles.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers:[ HotelesService]
})
export class HomeComponent implements OnInit {

  public modeloHoteles: hoteles;
  public buscar

  constructor(public _hotelesservices: HotelesService) { }

  ngOnInit(): void {
    this.obtenerHoteles()
  }

  obtenerHoteles(){
    this._hotelesservices.obtenerHoteles().subscribe((respuesta)=>{
     this.modeloHoteles = respuesta.hoteles
     console.log(respuesta)
    },(error)=>{
      console.log(<any>error)

    })
  }

}
