import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  httpOptions :any;

  constructor( private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };    
   }

   CreateCar(dato){
    console.log('dato: ', dato);
   let data = null;
   const path = environment.urlwervice + 'car/new/';
   data = this.http.post(path, dato, this.httpOptions);
   if(data != null){
     return data;
   }
 }

   SendCar(dato){
    console.log('dato: ', dato);
    let data = null;
    const path = environment.urlwervice + 'car/send/';
    data = this.http.post(path, dato, this.httpOptions);
    if(data != null){
      return data;
    }
  }

  getAllBuys(){
    let data = null;
    const path = environment.urlwervice + 'car/list/';
    data = this.http.get(path);
    if(data != null){
      return data;
    }
  }

/*
  addCondicion(condicion){
    console.log(condicion);
    let data = null;
    const url = environment.urlwervice + 'sol/cond/';
    data = this.http.post(url, condicion, this.httpOptions);// Enviamos al path el objeto user recibido
    if ( data != null){
      return data;
    }        
  }
*/

}
