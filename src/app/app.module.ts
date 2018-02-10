import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouterModule } from "@angular/router";
import { ProductModule } from './product/product.module';
import { CustomerModule } from './customer/customer.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    ProductModule,
    CustomerModule,
    RouterModule.forRoot([
      
       { path : '', redirectTo : 'welcome', pathMatch : 'full'},
      { path: 'welcome', component: WelcomeComponent }

    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
