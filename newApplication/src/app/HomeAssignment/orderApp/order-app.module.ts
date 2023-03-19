import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrderAppRoutingModule } from './order-app-routing.module';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AuthModule } from './auth/auth.module';


@NgModule({
  declarations: [
    LoginpageComponent,
    OrderDetailsComponent,
    CustomerDetailsComponent
  ],
  imports: [
    CommonModule,
    OrderAppRoutingModule,
    AuthModule
  ]
})
export class OrderAppModule { }
