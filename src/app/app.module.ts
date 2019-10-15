import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http'

import { ProductsComponent } from './components/products/products.component';
import { NewComponent } from './components/new/new.component';
import { AdminComponent } from './components/admin/admin.component';

import { ProductService } from '../app/services/product.service';
import { CarService } from '../app/services/car.service';
import { MenuComponent } from './components/menu/menu.component';

const routes: Route[] = [
  { path: '', redirectTo: '/products', pathMatch: 'full'}, 
  { path: 'products', component: ProductsComponent},
  { path: 'new', component: NewComponent},
  { path: 'admin', component: AdminComponent}
  //{ path: 'editProduct', component: ProductComponent, pathMatch: 'full'}
]

RouterModule.forRoot(routes, { useHash: true })

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    NewComponent,
    AdminComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [ProductService, CarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
