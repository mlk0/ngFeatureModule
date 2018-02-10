import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path : 'customers', component : CustomersComponent }
    ])
  ],
  declarations: [CustomersComponent]
})
export class CustomerModule { }
