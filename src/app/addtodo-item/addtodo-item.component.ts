import { Component, EventEmitter, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-addtodo-item',
  templateUrl: './addtodo-item.component.html',
  styleUrls: ['./addtodo-item.component.css']
})
export class AddtodoItemComponent {
  @Output() todoItemAdd: EventEmitter<Todo>= new EventEmitter();

  title:string;
  desc:string;

  onSubmit(){
    const Todo={
      title: this.title,
      desc: this.desc,
      active: true
    }
    this.todoItemAdd.emit(Todo);

  }
}
