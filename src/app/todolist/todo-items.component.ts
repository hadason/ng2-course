import {Component, OnInit, Input} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  selector: 'app-todo-items',
  // changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <ul class="todo-list">
      <app-todo-item *ngFor="let item of items" [item]="item"></app-todo-item>
    </ul>
  `,
  styles: []
})
export class TodoItemsComponent implements OnInit {

  @Input() private items: Item[];

  constructor() { }

  ngOnInit() {
  }

}
