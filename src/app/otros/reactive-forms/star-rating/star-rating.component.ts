import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

/**
 * * forwardRef(), permite referirse a referencias que aún no están definidas. 
 * * Por ejemplo, forwardRef se usa cuando se declara el token al que debemos hacer
 * * referencia para fines DI, pero aún no se ha defindo. También se usa cuando el token que
 * * usamos al crear una consulta aún no está definido.
 * *
 * * RESUMEN: Si nosotros agregamos un proveedor, como en este caso el NG_VALUE_ACCESSOR,  
 * * para que lo use con nuestro componente StarRatingComponent y no lo reconoce, es decir
 * * nos sale error, es que posiblemente esté descargando ese componente de manera lazy, 
 * * cuando eso sucede, quiere decir que la instancia de ese componente (StarRatingComponent)
 * * aún no está lista. En ese sentido, es que usamos la función forwardRef(...) para decirle que
 * * coga la instancia de nuestro componente StarRatingComponent y espere hasta que esté disponible,
 * * de esa manera nos aseguramos que usaremos la instancia correcta en el momento correcto
 */

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => StarRatingComponent), //* forwardRef(), nos permite
      multi: true //* Por si queremos utilizar más proveedores
    }
  ]
})
export class StarRatingComponent implements ControlValueAccessor {

  private _rating: number = 1;
  ratingArray: number[] = [0, 1, 2, 3, 4];

  //* La función que va a manipular el ControlValueAccessor
  private _onChanged: Function = (_value: number) => { };
  private _onTouch: Function = (_value: number) => { };


  ngOnInit(): void {

  }

  getIcon(indice: number) {
    return this._rating >= (indice + 1) ? 'fas fa-star' : 'far fa-star';
  }

  onClick(rating: number): void {
    this._rating = rating;
    this._onChanged(this._rating); //* Desencadenando función cuando hay cambios
    this._onTouch(this._rating); //* Desencadenamos la función cuando se ha tocado el control pasándole el valor
  }

  //*#region  ControlValueAccesso

  //***** Para ver qué hacen estos métodos revisar la teoría dejada en el html ¿Qué es el ControlValueAccessor (CVA)? ******** */

  //* Aquí se pasa el valor que esté interactuando con miFormulario.rating
  writeValue(value: number): void {
    if (value) {
      this._rating = value;
    }
  }

  //* Los cambios que se hagan en este control personalizado serán procesados a través de este 
  //* método para que el FormControl de miFormulario.rating los capture
  //* Registraremos en una variable la función de los cambios (changes)
  //* Por detrás, angular trabaja con el evento (change)
  registerOnChange(fn: Function): void {
    this._onChanged = fn;
  }

  //* Por detrás, angular trabajar con el evento (blur)
  registerOnTouched(fn: Function): void {
    this._onTouch = fn;
  }
  //*#region 

}
