import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.css']
})
export class CompletedComponent {
  todo$!: Observable<Todo[]>

  constructor(private todoService: TodoService) { }
  
 

  ngOnInit(): void {
    this.todo$ = this.todoService.getTodo()
  }

}
