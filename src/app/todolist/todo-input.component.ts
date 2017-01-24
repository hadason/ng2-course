import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="new-todo"
           placeholder="What needs to be done?"
           autofocus>
  `,
  styles: []
})
export class TodoInputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
