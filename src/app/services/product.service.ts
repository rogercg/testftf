import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from './../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  httpOptions:any;


  constructor( private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };    
   }

   getAllProducts(){
    let data = null;
    const path = environment.urlwervice + 'products/list/';
    data = this.http.get(path);
    if(data != null){
      return data;
    }
  }


}
