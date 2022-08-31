import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegistrrPage } from './registrr.page';

const routes: Routes = [
  {
    path: '',
    component: RegistrrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegistrrPageRoutingModule {}
