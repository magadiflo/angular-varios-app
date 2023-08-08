import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[customIf]'
})
export class CustomIfDirective {

  constructor(
    private _templateRef: TemplateRef<HTMLElement>,
    private _viewContainer: ViewContainerRef) { }

  @Input() set customIf(condition: boolean) {
    console.log('customIf: ', condition);
    if (condition) {
      this._viewContainer.createEmbeddedView(this._templateRef);
    } else {
      this._viewContainer.clear();
    }
  }
}
