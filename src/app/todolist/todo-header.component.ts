import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-header',
  template: `
    <header class="header">
      <ng-content></ng-content>
    </header>
  `,
  styles: []
})
export class TodoHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
