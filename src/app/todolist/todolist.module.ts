import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoFooterComponent } from './todo-footer.component';
import { TodoAppComponent } from './todo-app.component';
import { TodoHeaderComponent } from './todo-header.component';
import { TodoMainComponent } from './todo-main.component';
import { TodoTitleComponent } from './todo-title.component';
import { TodoInputComponent } from './todo-input.component';
import { TodoToggleComponent } from './todo-toggle.component';
import { TodoItemsComponent } from './todo-items.component';
import { TodoItemComponent } from './todo-item.component';
import { TodoCounterComponent } from './todo-counter.component';
import { TodoClearBtnComponent } from './todo-clear-btn.component';
import {Todolist} from "./todolist.service";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [Todolist],
  declarations: [
    TodoFooterComponent,
    TodoAppComponent,
    TodoHeaderComponent,
    TodoMainComponent,
    TodoTitleComponent,
    TodoInputComponent,
    TodoToggleComponent,
    TodoItemsComponent,
    TodoItemComponent,
    TodoCounterComponent,
    TodoClearBtnComponent],
  exports: [TodoAppComponent]
})
export class TodolistModule { }
