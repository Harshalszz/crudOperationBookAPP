import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list/crisis-list.component';
import { HeroListComponent } from './heroes/hero-list/hero-list.component';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
//import { HeroesModule } from './heroes/heroes.module';

import { TodolistComponent } from './todos/todolist/todolist.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroesModule } from './heroes/heroes.module';
import { TododetailsComponent } from './todos/tododetails/tododetails.component';
import { TodosModule } from './todos/todos.module';
import { FilterComponent } from './todos/filter/filter.component';
import { CompletedComponent } from './todos/completed/completed.component';
import { NonCompletedComponent } from './todos/non-completed/non-completed.component';
import { FormsModule } from '@angular/forms';
import { UserTodoComponent } from './todos/user-todo/user-todo.component';
import { OrderAppModule } from './HomeAssignment/orderApp/order-app.module';
import { HomePageComponent } from './HomeAssignment/orderApp/home-page/home-page.component';
import { BookComponent } from './bookApp/book/book.component';
import { ToastrModule } from 'ngx-toastr/public_api';



@NgModule({
  declarations: [
    AppComponent,
    CrisisListComponent,
    PageNotFoundComponent,
    FilterComponent,
    CompletedComponent,
    NonCompletedComponent,
    UserTodoComponent,
    HomePageComponent,
    
    // TodolistComponent,
    // TododetailsComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    OrderAppModule,
    
    TodosModule,
    HeroesModule,
    
    
    
   
    FormsModule,
            
    
         
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
