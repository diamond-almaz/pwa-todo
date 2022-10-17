import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { noop } from 'rxjs';
import { ITodo, TodoStatus } from '../../shared/types';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() todo!: ITodo;
  @Output() onDelete = new EventEmitter();
  @Output() onChangeCheked = new EventEmitter();

  get isChecked() {
    return this.todo.status === TodoStatus.done;
  }
  constructor() { }

  getTitleStyle() {
    return {
      textDecoration: this.isChecked ? 'line-through' : 'none'
    }
  }

  ngOnInit(): void {
  }
}
