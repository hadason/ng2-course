import {Component, OnInit, EventEmitter, Output, ElementRef} from '@angular/core';

@Component({
  selector: 'app-todo-input',
  template: `
    <input class="new-todo"
           #input
           (keyup.enter)="saveItem($event, input.value)"
           [placeholder]="placeholder"
           autofocus>
  `,
  styles: []
})
export class TodoInputComponent implements OnInit {

  @Output() save = new EventEmitter<string>();

  private placeholder: string;
  constructor() {
    this.placeholder = 'Enter something here...';
  }

  saveItem($event, value: string): void {
    this.save.emit(value);
    $event.target.value = '';
  }

  ngOnInit() {
  }

}
