import { Component, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  userID!:number;

  @Output() userIDEmit : EventEmitter<number>=new EventEmitter()

  emitUserID(){
    this.userIDEmit.emit(this.userID);
  }

  todo$!: Observable<Todo[]>
  
  constructor(private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService) { }

  ngOnInit() {
   //this.todo$= this.todoService.getUserTodo(this.userID)
   this.todo$ = this.todoService.getTodo()
  }

}
