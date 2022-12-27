import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContainerComponent } from './container/container.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { InfoAppComponent } from './info-app/info-app.component';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'customer-form', component: CustomerFormComponent, },
      { path: 'info-app', component: InfoAppComponent, },
      { path: '**', redirectTo: 'info-app' }
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InternacionalizacionRoutingModule { }
