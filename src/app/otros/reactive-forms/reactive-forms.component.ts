import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  /**
   * * Como parte de las necesidades que tenemos es que queremos tener un campo en el formulario, es decir queremos
   * * tener un nuevo FormControl llamado rating. Ahora, queremos que ese campo sea el componente de Angular que hemos
   * * creado (<app-star-rating></app-star-rating>) y para ello hacemos como normalmente hacemos con los otros 
   * * componentes nativos de formulario (input, select, etc..), es decir le agregamos el formControlName="rating", pero 
   * * eso no sería todo para que empiece a furncional, ya que por el momento, solo haciendo eso nos mostrará un error
   * * en consola: ERROR Error: No value accessor for form control with name: 'rating'.
   * * Ese error nos quiere decir que no encuentra un Accessor para el componente que estamos estableciéndole como 
   * * FormControl ya que de por sí es un componente y no un elemento nativo de formulario (input, select, textarea, etc..).
   * * Entonces, para que nuestro componente sea reconocido dentro del Formulario Reactivo, debe tener su propio intermediario,
   * * entre el FormControl y ese componente, es decir, debe tener su propio ControlValueAccessor.
   * *
   * * 1. Y eso se debe hacer directamente en el componente que se quiere controlar, es decir, en el componente StarRatingComponent.ts
   * *    debemos implementar la interfaz ControlValueAccessor e implementar sus 3 métodos (aunque el 4to es opcional).
   * * 2. Debemos utilizar un providers dentro de dicho componente (con eso ya estamos creando ese puente, ese intermediario)
   * *    providers: [
    **      {
    **        provide: NG_VALUE_ACCESSOR,
    **        useExisting: StarRatingComponent,
    **        multi: true //* Por si queremos utilizar más proveedores
    **      }
    **    ]
    ** 3. Ahora, nosotros teneoms que decirle a nuestro puente, nuestro intermediario,
    **    es decir a nuestro ControlValueAccessor implementado, cómo es que se debe comportar,
    **    para que pueda enviar información hacia el FormControl y de esa manera, desde esde
    **    ReactiveFormsComponent miFormulario, podamos acceder a sus valores
   */

  miFormulario: FormGroup = new FormGroup({
    title: new FormControl('El señor de los anillos', [Validators.required]),
    rating: new FormControl(3, [Validators.min(3), Validators.max(5)]),
    ratingName: new FormControl(),
  });

  guardar(): void {
    console.log('form valid? ', this.miFormulario.valid);   
    console.log(this.miFormulario.value);
    console.log('rating touched? ', this.miFormulario.controls['rating'].touched);
  }

}
