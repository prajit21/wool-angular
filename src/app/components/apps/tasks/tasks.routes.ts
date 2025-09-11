import { Routes } from '@angular/router';

export const Tasks: Routes = [
  {
    path: '',
    loadComponent: () => import('./tasks').then(m => m.Tasks),
    data: {
      title: 'Tasks',
      breadcrumb: 'Tasks',
    },
  },
];
