import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  template: `
    <ul class="todo-list">
      <app-todo-item></app-todo-item>
    </ul>
  `,
  styles: []
})
export class TodoItemsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
