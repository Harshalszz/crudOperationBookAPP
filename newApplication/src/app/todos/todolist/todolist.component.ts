import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent {

  todo$!: Observable<Todo[]>
  constructor(private todoService: TodoService) { }
  
 

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodo()
  }

  // getTodo(): void {
  //   this.todoService.getTodo()
  //   .subscribe(todo => this.todo$ = todo);
  // }

  

}
