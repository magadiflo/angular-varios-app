import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginationRoutingModule } from './pagination-routing.module';
import { PrimeNgComponent } from './prime-ng/prime-ng.component';


@NgModule({
  declarations: [
    PrimeNgComponent
  ],
  imports: [
    CommonModule,
    PaginationRoutingModule
  ]
})
export class PaginationModule { }
