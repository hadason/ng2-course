import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistModule} from "./todolist/todolist.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "./utils-module/utils.module";

@NgModule({
  declarations: [AppComponent],
  imports: [ReactiveFormsModule, BrowserModule, TodolistModule, UtilsModule],
  bootstrap: [AppComponent]
})
export class AppModule{
  constructor() {
    console.log('AppModule Viventium instance');
  }
}
