import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'data-binding', component: DataBindingComponent, },
      { path: '**', redirectTo: 'data-binding', },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtrosRoutingModule { }
