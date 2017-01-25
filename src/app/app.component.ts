// import { Component } from '@angular/core';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'Viventium!';
// }

import {Component} from "@angular/core";

@Component({
  selector: 'app-root',
  template:
    `
    <app-todo-app></app-todo-app>
    <app-todo-app></app-todo-app>
    <app-todo-app></app-todo-app>
    `,
  styles: ['h1 {color: purple}']
})
export class AppComponent {

  private _title: string;

  constructor() {
    this._title = 'Hello Viventium';
  }
}

