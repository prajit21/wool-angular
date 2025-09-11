import { Routes } from '@angular/router';

export const DataTable: Routes = [
  {
    path: '',
    loadComponent: () => import('./data-table').then(m => m.DataTable),
    data: [
      {
        title: 'Data Table',
        breadcrumb: 'Data Table',
      },
    ],
  },
];
