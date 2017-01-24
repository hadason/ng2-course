import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  template: `
    <li>
      <div class="view">
        <input class="toggle"
               type="checkbox">
  
        <label>Todo Tittle</label>

        <button class="destroy"></button>
  
      </div>
  
      <input class="edit">
    </li>
  `,
  styles: []
})
export class TodoItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
