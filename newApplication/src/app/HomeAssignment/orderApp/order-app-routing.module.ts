import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginpageComponent } from './auth/loginpage/loginpage.component';
import { OrderDetailsComponent } from './order-details/order-details.component';

const routes: Routes = [
  {path: 'homepage' , component:HomePageComponent},
  {path: '', redirectTo:'/homepage', pathMatch:"full"},
  {path: 'loginpage' , component:LoginpageComponent},
  {path: 'orderpage' , component:OrderDetailsComponent},
  {path: 'customerpage' , component:CustomerDetailsComponent},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderAppRoutingModule { }
