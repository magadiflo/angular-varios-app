import { NgModule } from '@angular/core';

//* Módulos de PrimeNg
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  exports: [
    TableModule,
    ButtonModule,
  ],
})
export class PrimeNgModule { }
