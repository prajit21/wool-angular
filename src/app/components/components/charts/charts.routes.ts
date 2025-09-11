import { Routes } from '@angular/router';

export const Charts: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex-chart',
        loadComponent: () => import('./apex-chart/apex-chart').then(m => m.ApexChart),
        data: {
          title: 'Apex Chart',
          breadcrumb: 'Apex Chart',
        },
      },
      {
        path: 'google-chart',
        loadComponent: () => import('./google-chart/google-chart').then(m => m.GoogleChart),
        data: {
          title: 'Google Chart',
          breadcrumb: 'Google Chart',
        },
      },
      {
        path: 'chartjs',
        loadComponent: () => import('./chart-js/chart-js').then(m => m.ChartJs),
        data: {
          title: 'ChartJS Chart',
          breadcrumb: 'ChartJS Chart',
        },
      },
      {
        path: 'chartist',
        loadComponent: () => import('./chartist-chart/chartist-chart').then(m => m.ChartistChart),
        data: {
          title: 'Chartist Chart',
          breadcrumb: 'Chartist Chart',
        },
      },
    ],
  },
];
