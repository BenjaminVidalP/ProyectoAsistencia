import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistroAlumPage } from './registro-alum.page';

const routes: Routes = [
  {
    path: '',
    component: RegistroAlumPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistroAlumPageRoutingModule {}
