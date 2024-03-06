import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TemaTccPage } from './tema-tcc.page';

const routes: Routes = [
  {
    path: '',
    component: TemaTccPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TemaTccPageRoutingModule {}
