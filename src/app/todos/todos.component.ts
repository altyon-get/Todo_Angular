import { Component } from '@angular/core';
import { Todo } from '../Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent {
  todolist: Todo[];
  constructor() {
    const localItem=localStorage.getItem("id1");
    if (localItem == null) {
      this.todolist=[];
    }
    else {
      this.todolist = JSON.parse(localItem);
    }
  }

  deleteThis(todoitem: Todo) {
    console.log(todoitem);
    const index = this.todolist.indexOf(todoitem);
    this.todolist.splice(index, 1); // 2nd parameter means remove one item only
    localStorage.setItem("id1", JSON.stringify(this.todolist));
  }
  addThis(todoitem: Todo) {
    console.log(todoitem);
    this.todolist.push(todoitem);
    localStorage.setItem("id1", JSON.stringify(this.todolist));
  }
  doneThis(todoitem: Todo) {
    const index = this.todolist.indexOf(todoitem);
    this.todolist[index].active=!this.todolist[index].active;
    localStorage.setItem("id1", JSON.stringify(this.todolist));
  }
}
