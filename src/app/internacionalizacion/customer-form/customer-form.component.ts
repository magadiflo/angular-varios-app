import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  templateUrl: './customer-form.component.html',
  styleUrls: ['./customer-form.component.css']
})
export class CustomerFormComponent implements OnInit {

  miFormulario: FormGroup = this._fb.group({
    name: [null, [Validators.required]],
    lastName: [null, [Validators.required]],
    email: [null, [Validators.email]],

  });

  constructor(private _fb: FormBuilder) { }

  ngOnInit(): void {
  }

  guardar(): void {
    console.log(this.miFormulario.value);
  }

}
