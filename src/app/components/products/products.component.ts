import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CarService } from '../../services/car.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  productos: any;
  car = [];
  total: number = 0;
  idcar: any;

  constructor(private productService: ProductService, private carService: CarService) { }

  ngOnInit() {
    this.loadProductos();
  }

  loadProductos() {
    this.productService.getAllProducts() //Llamamos a la funcion getAllTC del servicio
    .subscribe(data =>{ // Nos suscribimos a la funcion llamada y recibimos un parametro data
      if(data.data){
        this.productos = data.data;
        console.log(this.productos);
      }
    });
  }

  addCart(p){
    this.car.push(p);
    for (const key in this.car) {
      console.log("this.car[key].price: ", this.car[key].price);
      this.total += parseFloat(this.car[key].price);
    }
  }

  CreateCar() {
    const car = {
      desc: 'Sin observacione',
      total: this.total,
      cant: this.car.length
    }
    this.carService.CreateCar(car) //Llamamos a la funcion getAllTC del servicio
    .subscribe(data =>{ // Nos suscribimos a la funcion llamada y recibimos un parametro data
      if(data.data>=0){
        console.log("data.data: ", data);
        this.idcar = data.data;
        this.sendCar();
      }
    });
    
  }

  /**/sendCar() {
    for (const key in this.car) {
      console.log("this.car[key]: ", this.car[key]);
      this.carService.SendCar(this.car[key]) //Llamamos a la funcion getAllTC del servicio
    .subscribe(data =>{ // Nos suscribimos a la funcion llamada y recibimos un parametro data
      if(data.data){
        this.productos = data.data;
        console.log(this.productos);
      }
    });
    }
    
  }
  

}
