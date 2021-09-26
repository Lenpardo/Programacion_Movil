import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NuevoUserPage } from './nuevo-user.page';

const routes: Routes = [
  {
    path: '',
    component: NuevoUserPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NuevoUserPageRoutingModule {}
