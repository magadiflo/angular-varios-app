import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[numbersOnly]'
})
export class NumbersOnlyDirective {

  constructor(private _el: ElementRef<HTMLInputElement>) { }

  @HostListener('input', ['$event']) onChangeInput(event: Event): void {
    const charactersThatAreNotNumbers = /[^0-9]*/g
    const initValue = this._el.nativeElement.value;
    this._el.nativeElement.value = initValue.replace(charactersThatAreNotNumbers, '');
    if (initValue !== this._el.nativeElement.value) {
      event.stopPropagation();
    }
  }

}
