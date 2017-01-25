import {Directive, ElementRef, Renderer, HostListener} from '@angular/core';

@Directive({
  selector: '[appMarker]'
})
export class MarkerDirective {

  constructor(private element: ElementRef, private renderer: Renderer) {
    console.log(element);
  }

  @HostListener('mouseover')
  private mark() {
    this.setBackground(true);
  }

  @HostListener('mouseout')
  private unmark() {
    this.setBackground(false);
  }

  private setBackground(flag: boolean) {
    const _color = flag ? 'rgba(175, 47, 47, 0.15)' : '';
    this.renderer.setElementStyle(
      this.element.nativeElement, 'background-color', _color);
  }

}
