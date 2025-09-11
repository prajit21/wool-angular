import { Routes } from '@angular/router';

import { AdminGuard } from './shared/guard/admin.guard';
import { fullRoute } from './shared/routes/full-routes';
import { content } from './shared/routes/routes';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard/ecommerce',
    pathMatch: 'full',
  },
  {
    path: 'auth/login',
    loadComponent: () => import('./auth/auth-login/auth-login').then(m => m.AuthLogin),
  },
  {
    path: '',
    loadComponent: () => import('./shared/components/layouts/content/content').then(m => m.Content),
    canActivate: [AdminGuard],
    children: content,
  },
  {
    path: '',
    loadComponent: () => import('./shared/components/layouts/full/full').then(m => m.Full),
    canActivate: [AdminGuard],
    children: fullRoute,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
