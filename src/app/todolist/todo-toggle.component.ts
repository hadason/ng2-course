import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-toggle',
  template: `
    <input class="toggle-all"
           type="checkbox">
  `,
  styles: []
})
export class TodoToggleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
