import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { InternacionalizacionRoutingModule } from './internacionalizacion-routing.module';
import { ContainerComponent } from './container/container.component';
import { CustomerFormComponent } from './customer-form/customer-form.component';
import { InfoAppComponent } from './info-app/info-app.component';


@NgModule({
  declarations: [
    ContainerComponent,
    CustomerFormComponent,
    InfoAppComponent
  ],
  imports: [
    CommonModule,
    InternacionalizacionRoutingModule,
    ReactiveFormsModule,
  ]
})
export class InternacionalizacionModule { }
