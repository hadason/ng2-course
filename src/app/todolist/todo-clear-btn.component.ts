import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-clear-btn',
  template: `
    <button class="clear-completed">Clear completed</button>
  `,
  styles: []
})
export class TodoClearBtnComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
