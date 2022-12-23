import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DataBindingComponent } from './data-binding/data-binding.component';
import { ReactiveFormsComponent } from './reactive-forms/reactive-forms.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'data-binding', component: DataBindingComponent, },
      { path: 'reactive-forms', component: ReactiveFormsComponent, },
      { path: '**', redirectTo: 'data-binding', },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtrosRoutingModule { }
