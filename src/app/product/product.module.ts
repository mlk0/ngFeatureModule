import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
 
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : 'products' , component : ProductsComponent }
    ])
  ],
  declarations: [
    ProductsComponent
  ],
  exports : [
  //  ProductsComponent
  ]
})
export class ProductModule { }
