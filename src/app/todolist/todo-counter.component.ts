import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  template: `
    <span class="todo-count">
      <strong>{{amount}}</strong>
      item left
    </span>
  `,
  styles: []
})
export class TodoCounterComponent implements OnInit {

  @Input()
  public amount: number;

  constructor() { }

  ngOnInit() {
  }

}
