import { Component, forwardRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-rating-name',
  templateUrl: './rating-name.component.html',
  styleUrls: ['./rating-name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingNameComponent),
      multi: true,
    }
  ]
})
export class RatingNameComponent implements ControlValueAccessor {

  miFormulario: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    rating: [2, [Validators.required, Validators.min(3), Validators.max(5)]],
  });

  private _onChanged: Function = (_value: { name: string, rating: number }) => { };
  private _onTouch: Function = (_value: { name: string, rating: number }) => { };

  constructor(private _fb: FormBuilder) { }

  writeValue(obj: any): void {
    if (obj) {
      this.miFormulario.setValue(obj);
    }
  }

  registerOnChange(fn: Function): void {
    this._onChanged = fn;
  }

  registerOnTouched(fn: Function): void {
    this._onTouch = fn;
  }

}
