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

import {Component, OnInit} from "@angular/core";
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  template:
    `
      <div>{{userForm.value | json}}</div>
      <form [formGroup]="userForm" (ngSubmit)="register()">
        <fieldset>
          <input type="text" formControlName="username" placeholder="username">
          <input type="password" formControlName="password" placeholder="password">
        </fieldset>
        
        <span *ngIf="userForm.get('username').invalid">not valid!</span>
        
        <fieldset formGroupName="address">
          <legend>Address</legend>
          <input type="text" formControlName="city" placeholder="city">
          <input type="text" formControlName="street" placeholder="street">
        </fieldset>
        <fieldset formArrayName="phones">
          <legend>Phones</legend>
          <div *ngFor="let phone of userForm.get('phones').controls; let i = index" >
          <input type="text" [formControlName]="i" placeholder="phone">
          <button (click)="addPhone()">+</button>
          </div>
        </fieldset>
        
        <button type="submit">GO</button>
      </form>
    `,
  styles: [
    'input.ng-invalid {background-color: #af5b5e}'
  ]
})
export class AppComponent implements OnInit {


  private userForm: FormGroup;
  private username: FormControl;
  private password: FormControl;

  private address: FormGroup;
  private city: FormControl;
  private street: FormControl;

  private phones: FormArray;

  constructor(builder: FormBuilder) {
    this.userForm = builder.group({
      username: ['', Validators.minLength(3)],
      password: 'entium',
      address: builder.group({
        city: 'New York',
        street: '65 Broadway'
      }),
      phones: builder.array(['718-522-2000'])
    });

    console.log(this.userForm.value);
  }

  addPhone() {
    const phonesArr = <FormArray>this.userForm.get('phones');
    phonesArr.push(new FormControl());
  }

  register() {
    if (this.userForm.valid) {
      console.log(this.userForm.value);
    }
    else {
      console.log('Invalid');
    }
  }

  ngOnInit(): void {
    var userInput = this.userForm.get('username');
    userInput.valueChanges.subscribe(value => console.log(value));
  }
}

