import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivasRoutingModule } from './directivas-routing.module';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { AtributoPageComponent } from './atributo-page/atributo-page.component';
import { EstructuralesPageComponent } from './estructurales-page/estructurales-page.component';
import { ComponentesPageComponent } from './componentes-page/componentes-page.component';
import { ImagenRotaDirective } from './directives/de-atributos/imagen-rota.directive';
import { HighlightDirective } from './directives/de-atributos/highlight.directive';
import { NumbersOnlyDirective } from './directives/de-atributos/numbers-only.directive';


@NgModule({
  declarations: [
    LayoutPageComponent,
    AtributoPageComponent,
    EstructuralesPageComponent,
    ComponentesPageComponent,
    ImagenRotaDirective,
    HighlightDirective,
    NumbersOnlyDirective,
  ],
  imports: [
    CommonModule,
    DirectivasRoutingModule,
  ]
})
export class DirectivasModule { }
