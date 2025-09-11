import { Routes } from '@angular/router';

export const Contact: Routes = [
  {
    path: '',
    loadComponent: () => import('./contact').then(m => m.Contact),
    data: {
      title: 'Contacts',
      breadcrumb: 'Contacts',
    },
  },
];
