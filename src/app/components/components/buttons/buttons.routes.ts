import { Routes } from '@angular/router';

export const Buttons: Routes = [
  {
    path: '',
    children: [
      {
        path: 'default-style',
        loadComponent: () =>
          import('./default-style-button/default-style-button').then(m => m.DefaultStyleButton),
        data: {
          title: 'Default Style',
          breadcrumb: 'Default Style',
        },
      },
      {
        path: 'button-group',
        loadComponent: () => import('./button-group/button-group').then(m => m.ButtonGroup),
        data: {
          title: 'Button Group',
          breadcrumb: 'Button Group',
        },
      },
    ],
  },
];
