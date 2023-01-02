import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-displaytodo',
  templateUrl: './displaytodo.component.html',
  styleUrls: ['./displaytodo.component.css']
})
export class DisplaytodoComponent {
  @Input() todoItem:Todo;
  @Output() todoItemDelete: EventEmitter<Todo>= new EventEmitter();
  @Output() todoItemDone: EventEmitter<Todo>= new EventEmitter();

  onClick(todoItem:Todo ){
    this.todoItemDelete.emit(todoItem);
    console.log("onClick triggered");
  }
  
  onCheckboxClick(todoItem:Todo){
    this.todoItemDone.emit(todoItem);
  }
}

