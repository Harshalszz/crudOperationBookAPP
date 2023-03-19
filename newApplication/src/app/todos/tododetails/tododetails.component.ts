import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { HeroService } from 'src/app/heroes/hero.service';
import { Todo } from '../todo';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-tododetails',
  templateUrl: './tododetails.component.html',
  styleUrls: ['./tododetails.component.css']
})
export class TododetailsComponent {

  todo$!:Observable<Todo>
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private todoService: TodoService
  ) {}


  ngOnInit() {
    this.todo$= this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.todoService.getTodo1(params.get('id')!))
    );
  }



}
