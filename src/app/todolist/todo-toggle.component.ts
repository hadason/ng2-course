import {Component, OnInit, Output} from '@angular/core';
import {EventEmitter} from "@angular/common/src/facade/async";

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
