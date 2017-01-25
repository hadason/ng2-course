import {PipeTransform, Pipe} from "@angular/core";


@Pipe({name: 'upper'})
export class UpperPipe implements PipeTransform {

  public transform(value: string): string {
    return value;
  }
}
