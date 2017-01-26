///<reference path="../../node_modules/@angular/forms/src/directives/validators.d.ts"/>
import {Validator, AbstractControl} from "@angular/forms";

export class dogValidator implements Validator {
    validate(c: AbstractControl): {[p: string]: any} {
      if (control.value.indexOf(' ') >= 0) {
        return {
          hasSpace: true
        }
      }
      return null;
    }

}
