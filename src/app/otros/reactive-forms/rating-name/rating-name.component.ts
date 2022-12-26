import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-rating-name',
  templateUrl: './rating-name.component.html',
  styleUrls: ['./rating-name.component.css']
})
export class RatingNameComponent {

  miFormulario: FormGroup = this._fb.group({
    name: ['', [Validators.required]],
  });

  constructor(private _fb: FormBuilder) { }

}
