import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-user-todo',
  templateUrl: './user-todo.component.html',
  styleUrls: ['./user-todo.component.css']
})
export class UserTodoComponent {
  userID!:number

  todo$!: Observable<Todo[]>
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
   //this.todo$= this.todoService.getUserTodo(this.userID)
   this.todo$ = this.todoService.getTodo()
  }


}
