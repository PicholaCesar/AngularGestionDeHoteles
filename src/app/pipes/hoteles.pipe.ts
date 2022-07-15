import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'hoteles'
})
export class HotelesPipe implements PipeTransform {

  transform(Hoteles:any, search:any) {
    if(search == undefined){
      return Hoteles
    }else{
      return Hoteles.filter(hotel =>{
        return hotel.nombre.toLowerCase().includes(search.toLowerCase())
      })
    }
    
  }

}
