import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { AtributoPageComponent } from './atributo-page/atributo-page.component';
import { EstructuralesPageComponent } from './estructurales-page/estructurales-page.component';
import { ComponentesPageComponent } from './componentes-page/componentes-page.component';
import { ImagenRotaDirective } from './directives/de-atributos/imagen-rota.directive';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AtributoPageComponent,
    EstructuralesPageComponent,
    ComponentesPageComponent,
    ImagenRotaDirective,
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule,
  ]
})
export class DirectivasModule { }
