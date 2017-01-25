import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-main',
  template: `
    <section class="main">
      <ng-content></ng-content>
    </section>
  `,
  styles: []
})
export class TodoMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
