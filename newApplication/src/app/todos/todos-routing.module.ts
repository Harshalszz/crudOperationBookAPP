import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompletedComponent } from './completed/completed.component';
import { FilterComponent } from './filter/filter.component';
import { NonCompletedComponent } from './non-completed/non-completed.component';
import { TododetailsComponent } from './tododetails/tododetails.component';
import { TodolistComponent } from './todolist/todolist.component';
import { UserTodoComponent } from './user-todo/user-todo.component';

const routes: Routes = [

  { path: 'todos', component: TodolistComponent },
  { path: 'todo/:id', component: TododetailsComponent },
  { path: 'filter', component: FilterComponent },
  { path: 'completed', component: CompletedComponent },
  { path: 'non-completed', component: NonCompletedComponent },
  //{ path: '',   redirectTo: '/filter', pathMatch: 'full' },
  {path:'userTodo', component:UserTodoComponent}

];  

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodosRoutingModule { }
