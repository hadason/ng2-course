import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-todo-clear-btn',
  template: `
    <button (click)="clear.emit()" 
    class="clear-completed">{{label}}</button>
  `,
  styles: []
})
export class TodoClearBtnComponent implements OnInit {

  @Input() label: string;
  @Output() clear = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
