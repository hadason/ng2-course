import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-main',
  template: `
    <section class="main">
      <app-todo-toggle></app-todo-toggle>
      <app-todo-items></app-todo-items>
    </section>
  `,
  styles: []
})
export class TodoMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
