import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PrimeNgComponent } from './prime-ng/prime-ng.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'prime-ng', component: PrimeNgComponent },
      { path: '**', redirectTo: 'prime-ng' },
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginationRoutingModule { }
