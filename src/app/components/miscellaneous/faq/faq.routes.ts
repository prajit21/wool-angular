import { Routes } from '@angular/router';

export const Faq: Routes = [
  {
    path: '',
    loadComponent: () => import('./faq').then(m => m.Faq),
    data: {
      title: 'FAQ',
      breadcrumb: 'FAQ',
    },
  },
];
