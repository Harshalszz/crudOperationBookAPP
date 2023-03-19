import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-non-completed',
  templateUrl: './non-completed.component.html',
  styleUrls: ['./non-completed.component.css']
})
export class NonCompletedComponent {

  todo$!: Observable<Todo[]>

  constructor(private todoService: TodoService) { }
  
 

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodo()
  } 

}
