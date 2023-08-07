import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutPageComponent } from './layout-page/layout-page.component';
import { AtributoPageComponent } from './atributo-page/atributo-page.component';
import { EstructuralesPageComponent } from './estructurales-page/estructurales-page.component';
import { ComponentesPageComponent } from './componentes-page/componentes-page.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutPageComponent,
    children: [
      { path: 'de-atributo', component: AtributoPageComponent, },
      { path: 'estructurales', component: EstructuralesPageComponent, },
      { path: 'componentes', component: ComponentesPageComponent, },
      { path: '**', redirectTo: 'de-atributo', },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DirectivasRoutingModule { }
