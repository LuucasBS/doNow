import { Routes } from '@angular/router';
import { Layout } from './layout/layout';

export const routes: Routes = [
  {
    path: 'pt-br',
    component: Layout,
    children: [
      {
        path: 'login',
        loadComponent: () =>
          import('./pages/externo/login/login').then((m) => m.Login),
      },
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'pt-br',
    pathMatch: 'full',
  },
];
