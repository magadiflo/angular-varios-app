import { Component, forwardRef } from '@angular/core';
import { FormGroup, Validators, FormBuilder, ControlValueAccessor, NG_VALUE_ACCESSOR, Validator, AbstractControl, ValidationErrors, NG_VALIDATORS } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-rating-name',
  templateUrl: './rating-name.component.html',
  styleUrls: ['./rating-name.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingNameComponent),
      multi: true,
    },
    //* Con este provider, nosotros replicaríamos el error a nuestro componente padre
    {
      provide: NG_VALIDATORS,
      useExisting: forwardRef(() => RatingNameComponent),
      multi: true,
    }
  ]
})
export class RatingNameComponent implements ControlValueAccessor, Validator {

  miFormulario: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
    rating: [2, [Validators.required, Validators.min(3), Validators.max(5)]],
  });

  private _onChanged: Function = (_value: { name: string, rating: number }) => { };
  private _onTouch: Function = (_value: { name: string, rating: number }) => { };

  constructor(private _fb: FormBuilder) {
    //* Para estar atentos a los cambios de todos los controles definidos en el formulario
    //* (en nuestro caso en el input => name y component => rating)
    //* Pero como eso es súper rápido, y nosotros necesitamos un pequeño tiempo para ejecutar
    //* los métodos onChanged y onTouched, implementamos el debounceTime(), para darle un pequeño
    //* tiempo de procesamiento. 
    //* Dentro del subscribe, obtendremos los cambios que se efectúen en el input name o component rating
    this.miFormulario.valueChanges
      .pipe(debounceTime(100))
      .subscribe(() => {
        //* Pasamos todo el valor de miFormulario ya que en el WriteValue nosotros recepcionamos un objeto similar
        this._onChanged(this.miFormulario.value);
        this._onTouch(this.miFormulario.value);
      });
  }

  //* #ControlValueAccessor: Métodos implementados
  //*
  //* Cuando se nos envía información, es en este método donde la recepcionamos
  //* Como observamos el objeto que recibimos por parámetro coincíde con los 
  //* campos definidos en miFormulario, es decir se tiene el: name y rating,
  //* así que por eso lo asignamos con el setValue(...) a todo el formulario.
  //* Si viniera los campos en el objeto con nombre distinto al que se tiene en el formulario
  //* tendríamos que agregarlos campo por campo
  writeValue(obj: { name: string, rating: number }): void {
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
  //* #ControlValueAccessor



  //* #Validator: Métodos implementados
  //*
  //* Como nosotros no usamos el parámetro del validate(...), es que le agregamos un _ como buena práctica, quedando:  _control
  validate(_control: AbstractControl): ValidationErrors | null {
    //* Si es válido este formulario retornamos null, caso contrario un objeto personalizado conteniendo el error
    return this.miFormulario.valid ? null : { invalidRatingName: true };
  }
  //* #Validator

}

/**
 ** El formulario hijo debería propagar los errores al 
 ** formulario padre, que es quien lo está usando, para eso
 ** deberíamos implementar la interfaz Validator y agregar
 ** el provider NG_VALIDATORS

 ** VALIDATOR
 ** -------------
 ** Un validador en Angular es una función que retorna lo
 ** siguiente:
 ** - Si el control es válido: null
 ** - Si es control es inválido: objeto de error
 */