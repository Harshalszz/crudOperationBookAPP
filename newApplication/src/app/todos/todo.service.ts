import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Todo } from './todo';

@Injectable({ providedIn: 'root' })
export class TodoService {

  private heroesUrl = 'https://jsonplaceholder.typicode.com/todos/';  // URL to web api

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient) { }

    getTodo(): Observable<Todo[]>{

        return this.http.get<Todo[]>(this.heroesUrl);

    }


    getTodo1(id: number | string) {
      return this.getTodo().pipe(
        map((todos: Todo[]) => todos.find(t => t.id === +id)!)
      );
    }

    getUserTodo(userid: number | string) {
      return this.getTodo().pipe(
        map((todos: Todo[]) => todos.find(t => t.userId === +userid)!)
      );
    }

    userID !: number;

  

}



