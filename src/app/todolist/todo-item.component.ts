import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {Item} from "./todolist.service";

@Component({
  selector: 'app-todo-item',
  template: `
    <li [class.completed]="item.done">
      <div appMarker class="view">
        <input class="toggle" [(ngModel)]="item.done" 
               type="checkbox">
  
        <label appMarker>{{item.title | upper}}</label>

        <button appMarker class="destroy" (click)="remove()"></button>
  
      </div>
  
      <input class="edit">
    </li>
  `,
  styles: []
})
export class TodoItemComponent implements OnInit {

  @Input() private item: Item;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
