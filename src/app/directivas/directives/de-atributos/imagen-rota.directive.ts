import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[imagenRota]'
})
export class ImagenRotaDirective {

  constructor(private _el: ElementRef<HTMLImageElement>) { }

  @HostListener('error') loadImageByDefault() {
    this._el.nativeElement.src = 'assets/no-imagen.png';
  }

}
