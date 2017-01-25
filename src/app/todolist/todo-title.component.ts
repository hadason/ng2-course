import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-todo-title',
  template: `
    <h1>{{title}}</h1>
  `,
  styles: []
})
export class TodoTitleComponent implements OnInit {

  @Input()
  private title: string;

  constructor() {
  }

  ngOnInit() {
  }

}
