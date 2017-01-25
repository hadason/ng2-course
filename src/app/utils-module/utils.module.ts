import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UpperPipe} from "./upper.pipe";
import { CountByPipe } from './count-by.pipe';
import { MarkerDirective } from './marker.directive';
import { IfDirective } from './if.directive';
import {StorageService} from "./storage";

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    UpperPipe,
    StorageService
  ],
  declarations: [CountByPipe, UpperPipe, MarkerDirective, IfDirective],
  exports: [CountByPipe, UpperPipe, MarkerDirective, IfDirective]
})
export class UtilsModule { }
