import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  template: `
    <span class="todo-count">
      <strong>1</strong>
      item left
    </span>
  `,
  styles: []
})
export class TodoCounterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
