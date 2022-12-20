import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'subject',
    loadChildren: () => import('./subject/subject.module').then(m => m.SubjectModule),
  },
  {
    path: 'pagination',
    loadChildren: () => import('./pagination/pagination.module').then(m => m.PaginationModule),
  },
  {
    path: 'otros',
    loadChildren: () => import('./otros/otros.module').then(m => m.OtrosModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
