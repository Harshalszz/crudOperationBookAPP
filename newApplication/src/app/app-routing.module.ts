import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { TodolistComponent } from './todos/todolist/todolist.component';
import { FilterComponent } from './todos/filter/filter.component';
import { BookComponent } from './bookApp/book/book.component';
import { AddBookComponent } from './bookApp/book/add-book/add-book.component';
import { UpdateBookComponent } from './bookApp/book/update-book/update-book.component';
import { LendComponent } from './bookApp/book/lend/lend.component';


const appRoutes: Routes = [

  {path : 'book' ,component:BookComponent},
  {path :'' , redirectTo:"book", pathMatch:"full"},
  {path: 'add-book', component:AddBookComponent},
  {path: 'update/:id', component:UpdateBookComponent},
  {path: 'lend', component:LendComponent},


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
    BookComponent,
    
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
