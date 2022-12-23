import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OtrosRoutingModule } from './otros-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';
import { StarRatingComponent } from './reactive-forms/star-rating/star-rating.component';


@NgModule({
  declarations: [
    DataBindingComponent,
    ReactiveFormsComponent,
    StarRatingComponent
  ],
  imports: [
    CommonModule,
    OtrosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class OtrosModule { }
