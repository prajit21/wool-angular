import { Routes } from '@angular/router';

export const Editor: Routes = [
  {
    path: '',
    children: [
      {
        path: 'ngx-editors',
        loadComponent: () => import('./ngx-editor/ngx-editor').then(m => m.NgxEditor),
        data: {
          title: 'Ngx Editor',
          breadcrumb: 'Ngx Editor',
        },
      },
      {
        path: 'kolkov-editors',
        loadComponent: () => import('./kolkov-editor/kolkov-editor').then(m => m.KolkovEditor),
        data: {
          title: 'MDE Editor',
          breadcrumb: 'MDE Editor',
        },
      },
    ],
  },
];
