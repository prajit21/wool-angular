import { Routes } from '@angular/router';

export const fullRoute: Routes = [
  {
    path: 'error-page',
    loadChildren: () =>
      import('../../components/pages/others/error-page/error.routes').then(r => r.ErrorPages),
  },
  {
    path: 'authentication',
    loadChildren: () =>
      import('../../components/pages/others/authentication/authentication.routes').then(
        r => r.AuthenticationPages,
      ),
  },
  {
    path: 'coming-soon',
    loadChildren: () =>
      import('../../components/pages/others/coming-soon/coming-soon.routes').then(
        r => r.CommingSoonPages,
      ),
  },
];
