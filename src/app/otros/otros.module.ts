import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OtrosRoutingModule } from './otros-routing.module';
import { DataBindingComponent } from './data-binding/data-binding.component';


@NgModule({
  declarations: [
    DataBindingComponent
  ],
  imports: [
    CommonModule,
    OtrosRoutingModule
  ]
})
export class OtrosModule { }
