import { Routes } from '@angular/router';

export const widgets: Routes = [
  {
    path: '',
    children: [
      {
        path: 'general',
        loadComponent: () => import('./general/general').then(m => m.General),
        data: {
          title: 'General',
          breadcrumb: 'General',
        },
      },
      {
        path: 'charts',
        loadComponent: () => import('./chart/chart').then(m => m.Chart),
        data: {
          title: 'chart',
          breadcrumb: 'chart',
        },
      },
    ],
  },
];
