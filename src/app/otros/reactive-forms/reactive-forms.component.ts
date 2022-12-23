import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

  miFormulario: FormGroup = new FormGroup({
    title: new FormControl('El señor de los anillos', [Validators.required]),
  });

  guardar(): void {
    console.log(this.miFormulario.value);
    console.log(this.miFormulario.valid);
  }

}
