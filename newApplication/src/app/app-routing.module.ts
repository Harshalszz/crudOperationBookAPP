import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TodolistComponent } from './todos/todolist/todolist.component';
import { FilterComponent } from './todos/filter/filter.component';


const appRoutes: Routes = [

  // {path : 'login', component:LoginComponent},
  // {path : 'forgot-password', component:ForgotPasswordComponent},
  // {path : '' , redirectTo:'/login', pathMatch:'full'},
  // {path:'**' , component:NotFoundComponent},
  //{ path: 'crisis-center', component: CrisisListComponent },
 // { path: '',   redirectTo: '/todos', pathMatch: 'full' },
   //{path:'', component:FilterComponent},
  
 // { path: '**', component: PageNotFoundComponent }
 
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
