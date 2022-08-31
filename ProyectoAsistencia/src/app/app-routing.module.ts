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
    path: 'registrar',
    loadChildren: () => import('./pages/registrar/registrar.module').then( m => m.RegistrarPageModule)
  },
  {
    path: 'registrado',
    loadChildren: () => import('./pages/registrado/registrado.module').then( m => m.RegistradoPageModule)
  },
  {
    path: 'qrasistencia',
    loadChildren: () => import('./pages/qrasistencia/qrasistencia.module').then( m => m.QRasistenciaPageModule)
  },
  {
    path: 'horario',
    loadChildren: () => import('./pages/horario/horario.module').then( m => m.HorarioPageModule)
  },
  {
    path: 'profesores',
    loadChildren: () => import('./pages/profesores/profesores.module').then( m => m.ProfesoresPageModule)
  },
  {
    path: 'recuperacion-clave',
    loadChildren: () => import('./pages/recuperacion-clave/recuperacion-clave.module').then( m => m.RecuperacionClavePageModule)
  },
  {
    path: 'lista',
    loadChildren: () => import('./pages/lista/lista.module').then( m => m.ListaPageModule)
  },
  {
    path: 'registro-alum',
    loadChildren: () => import('./pages/registro-alum/registro-alum.module').then( m => m.RegistroAlumPageModule)
  },
  {
    path: 'recuperar-contra',
    loadChildren: () => import('./pages/recuperar-contra/recuperar-contra.module').then( m => m.RecuperarContraPageModule)
  },
  {
    path: 'input',
    loadChildren: () => import('./pages/input/input.module').then( m => m.InputPageModule)
  },
  {
    path: '**',
    loadChildren: () => import('./pages/not-found/not-found.module').then( m => m.NotFoundPageModule)
  },  {
    path: 'registrr',
    loadChildren: () => import('./pages/registrr/registrr.module').then( m => m.RegistrrPageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
