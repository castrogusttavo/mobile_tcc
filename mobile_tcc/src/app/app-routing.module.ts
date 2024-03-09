import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'objetivos',
    loadChildren: () => import('./objetivos/objetivos.module').then( m => m.ObjetivosPageModule)
  },
  {
    path: 'integrantes',
    loadChildren: () => import('./integrantes/integrantes.module').then( m => m.IntegrantesPageModule)
  },
  {
    path: 'agradecimento',
    loadChildren: () => import('./agradecimento/agradecimento.module').then( m => m.AgradecimentoPageModule)
  },
  {
    path: 'tecnologias',
    loadChildren: () => import('./tecnologias/tecnologias.module').then( m => m.TecnologiasPageModule)
  },
  {
    path: 'tema',
    loadChildren: () => import('./tema/tema.module').then( m => m.TemaPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
