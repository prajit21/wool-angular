import { Routes } from '@angular/router';

export const CommingSoonPages: Routes = [
  {
    path: '',
    children: [
      {
        path: 'coming-simple',
        loadComponent: () =>
          import('./coming-soon-simple/coming-soon-simple').then(m => m.ComingSoonSimple),
      },
      {
        path: 'coming-with-bg-video',
        loadComponent: () =>
          import('./coming-soon-bg-video/coming-soon-bg-video').then(m => m.ComingSoonBgVideo),
      },
      {
        path: 'coming-with-bg-image',
        loadComponent: () =>
          import('./coming-soon-bg-image/coming-soon-bg-image').then(m => m.ComingSoonBgImage),
      },
    ],
  },
];
