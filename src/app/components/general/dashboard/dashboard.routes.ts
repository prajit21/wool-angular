import { Routes } from '@angular/router';

export const dashboard: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ecommerce',
        loadComponent: () =>
          import('./e-commerce-dashboard/e-commerce-dashboard').then(m => m.ECommerceDashboard),
        data: {
          title: 'Ecommerce Dashboard',
          breadcrumb: 'E-Commerce',
        },
      },
      {
        path: 'crypto',
        loadComponent: () =>
          import('./crypto-dashboard/crypto-dashboard').then(m => m.CryptoDashboard),
        data: {
          title: 'Crypto Dashboard',
          breadcrumb: 'Crypto',
        },
      },
    ],
  },
];
