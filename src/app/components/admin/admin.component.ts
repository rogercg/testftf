import { Component, OnInit } from '@angular/core';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  buys:[];

  constructor(private carService: CarService) { 

  }

  ngOnInit() {
    this.loadBuys();
  }

  loadBuys(){
    this.carService.getAllBuys() //Llamamos a la funcion getAllTC del servicio
    .subscribe(data =>{ // Nos suscribimos a la funcion llamada y recibimos un parametro data
      if(data.data){
        this.buys = data.data;
        console.log(this.buys);
      }
    });
  }

}
