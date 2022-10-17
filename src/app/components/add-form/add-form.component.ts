import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/shared/data.service';
import { TodoStatus } from 'src/app/shared/types';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss']
})
export class AddFormComponent implements OnInit {

  todoForm = new FormGroup({
    todoTitle: new FormControl('')
  })

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    const { value } = this.todoForm.controls.todoTitle;
    if (value) {
      this.dataService.addTodo({
        title: value,
        status: TodoStatus.todo,
      })
    }
    this.todoForm.reset();
  }

}
