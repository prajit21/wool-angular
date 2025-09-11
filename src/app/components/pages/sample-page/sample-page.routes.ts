import { Routes } from '@angular/router';

export const SamplePage: Routes = [
  {
    path: '',
    loadComponent: () => import('./sample-page').then(m => m.SamplePage),
    data: {
      title: 'Sample Page',
      breadcrumb: 'Sample Page',
    },
  },
];
