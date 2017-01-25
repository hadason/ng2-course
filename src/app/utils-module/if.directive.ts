import {Directive, TemplateRef, ViewContainerRef, Input} from '@angular/core';

@Directive({
  selector: '[appIf]'
})
export class IfDirective {
  private _template: TemplateRef<any>;
  private _container: ViewContainerRef;

  constructor(template: TemplateRef<any>, container: ViewContainerRef) {
    this._template = template;
    this._container = container;

  }

  @Input()
  set appIf(value: boolean) {
    if (value) {
      this._container.createEmbeddedView(this._template);
    }
    else {
      this._container.clear();
    }
  };

}
