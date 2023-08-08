import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[highlight]'
})
export class HighlightDirective {

  constructor(
    private _el: ElementRef<HTMLElement>,
    private _render: Renderer2) {
    console.log(this._el);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this._highlight('yellow');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this._highlight('');
  }

  private _highlight(color: string): void {
    //* this._el.nativeElement.style.backgroundColor = color;
    this._render.setStyle(this._el.nativeElement, 'background-color', color);
  }

}
