import { Component, OnInit } from '@angular/core';
import {Todolist} from "./todolist.service";
import {StorageService} from "../utils-module/storage";

@Component({
  selector: 'app-todo-app',
  providers: [
    { provide: Todolist,
      useFactory: (storage) => new Todolist(storage, 'KEY'),
      deps: [StorageService]
    }
  ],
  template: `
    <section class="todoapp">
      <app-todo-header>
        <app-todo-title title="Viventium"></app-todo-title>
        <app-todo-input (save)="list.addItem($event)"></app-todo-input>
      </app-todo-header>
      <app-todo-main>
        <app-todo-toggle></app-todo-toggle>
        <app-todo-items [items]="list.items"></app-todo-items>
      </app-todo-main>
      <app-todo-footer>
        <app-todo-counter [amount]="list.items | countBy:'done':false"></app-todo-counter>
       <app-todo-clear-btn label="Clear Completed" (clear)="list.removeDone()"></app-todo-clear-btn>
       <!--<img style="user-select: none;" src="data:image/png;base64,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" width="101" height="93">-->
      </app-todo-footer>
    </section>
  `
})

export class TodoAppComponent implements OnInit {

  private list: Todolist;

  constructor(list: Todolist) {
    this.list = list;

    // setInterval(() => list.addItem(new Date().toDateString()), 1000);
  }

  // toggleItems(chec ked: boolean) {
  //
  // }



  ngOnInit() {
  }

}
