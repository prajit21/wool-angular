import { Routes } from '@angular/router';

export const hidenav: Routes = [
  {
    path: '',
    children: [
      {
        path: 'hide-nav-scroll',
        loadComponent: () => import('./hide-nav-scroll/hide-nav-scroll').then(m => m.HideNavScroll),
        data: {
          title: 'Hide Menu On Scroll',
          breadcrumb: 'Hide Menu On Scroll',
        },
      },
      {
        path: 'footer-light',
        loadComponent: () => import('./footer-light/footer-light').then(m => m.FooterLight),
        data: {
          title: 'Footer Light',
          breadcrumb: 'Footer Light',
        },
      },
      {
        path: 'footer-dark',
        loadComponent: () => import('./footer-dark/footer-dark').then(m => m.FooterDark),
        data: {
          title: 'Footer Dark',
          breadcrumb: 'Footer Dark',
        },
      },
      {
        path: 'footer-fixed',
        loadComponent: () => import('./footer-fixed/footer-fixed').then(m => m.FooterFixed),
        data: {
          title: 'Footer Fixed',
          breadcrumb: 'Footer Fixed',
        },
      },
    ],
  },
];
