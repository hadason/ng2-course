// import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { HttpModule } from '@angular/http';
//
// import { AppComponent } from './app.component';
//
// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     BrowserModule,
//     FormsModule,
//     HttpModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })
// export class AppModule { }

import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {BrowserModule} from "@angular/platform-browser";
import {TodolistModule} from "./todolist/todolist.module";
import {FormsModule} from "@angular/forms";
import {UtilsModule} from "./utils-module/utils.module";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, TodolistModule, FormsModule, UtilsModule],
  bootstrap: [AppComponent]
})
export class AppModule{
  constructor() {
    console.log('AppModule Viventium instance');
  }
}
