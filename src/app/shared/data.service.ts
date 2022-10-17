import { Injectable } from '@angular/core';
import { StorageMap } from '@ngx-pwa/local-storage';
import { BehaviorSubject, noop } from 'rxjs';
import { ITodo, LOCAL_STORAGE_KEYS, TodoStatus } from './types';

const TodosJSONSchema = {
  type: 'array',
  items: {
    type: 'object',
    properties: {
      title: {
        type: 'string',
      },
      status: {
        type: 'string',
        enum: Object.keys(TodoStatus),
      }
    }
  }
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  todos$ = new BehaviorSubject<ITodo[]>([]);

  constructor(private storage: StorageMap) {
    this.storage.get(LOCAL_STORAGE_KEYS.todos).subscribe((todosFromLocalStorage) => {
      if (todosFromLocalStorage) {
        this.todos$.next(todosFromLocalStorage as ITodo[]);
      }
    })
  }

  get todos() {
    return this.todos$.value;
  }

  addTodosToLS(todos: ITodo[]= this.todos) {
    this.storage.set(LOCAL_STORAGE_KEYS.todos, todos).subscribe();
  }

  addTodo(newTodo: ITodo) {
    this.todos.push(newTodo);
    this.addTodosToLS();
  }
  
  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.addTodosToLS();
  }

  changeCheked(index: number) {
    this.todos[index].status = this.todos[index].status === TodoStatus.done ? TodoStatus.todo : TodoStatus.done;
    this.addTodosToLS();
  }
}
