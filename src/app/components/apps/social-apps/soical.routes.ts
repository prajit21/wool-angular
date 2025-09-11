import { Routes } from '@angular/router';

export const SoicalApp: Routes = [
  {
    path: '',
    loadComponent: () => import('./social-apps').then(m => m.SocialApps),
    data: {
      title: 'Soical App',
      breadcrumb: 'Soical App',
    },
  },
];
