import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from '../welcome/welcome.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot([

      { path: '', redirectTo: 'welcome', pathMatch: 'full' },
      { path: 'welcome', component: WelcomeComponent }

    ])
  ],
  declarations: [],
  exports : [
    RouterModule
  ]
})
export class AppRoutingModule { }
