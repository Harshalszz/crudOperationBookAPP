import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { TodolistComponent } from './todolist/todolist.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TodolistComponent,
    TododetailsComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    
  ]
})
export class TodosModule { }
