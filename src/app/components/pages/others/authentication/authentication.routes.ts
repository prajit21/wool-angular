import { Routes } from '@angular/router';

export const AuthenticationPages: Routes = [
  {
    path: '',
    children: [
      {
        path: 'simple-login',
        loadComponent: () => import('./login-simple/login-simple').then(m => m.LoginSimple),
      },
      {
        path: 'login-bg-image',
        loadComponent: () => import('./login-bg-image/login-bg-image').then(m => m.LoginBgImage),
      },
      {
        path: 'login-image-two',
        loadComponent: () => import('./login-image-two/login-image-two').then(m => m.LoginImageTwo),
      },
      {
        path: 'login-validation',
        loadComponent: () =>
          import('./login-validation/login-validation').then(m => m.LoginValidation),
      },
      {
        path: 'login-tooltip',
        loadComponent: () => import('./login-tooltip/login-tooltip').then(m => m.LoginTooltip),
      },
      {
        path: 'login-sweet-alert',
        loadComponent: () =>
          import('./login-sweet-alert/login-sweet-alert').then(m => m.LoginSweetAlert),
      },
      {
        path: 'register-simple',
        loadComponent: () =>
          import('./register-simple/register-simple').then(m => m.RegisterSimple),
      },
      {
        path: 'register-bg-image',
        loadComponent: () =>
          import('./register-bg-image/register-bg-image').then(m => m.RegisterBgImage),
      },
      {
        path: 'register-image-two',
        loadComponent: () =>
          import('./register-image-two/register-image-two').then(m => m.RegisterImageTwo),
      },
      {
        path: 'unlock-user',
        loadComponent: () => import('./unlock-user/unlock-user').then(m => m.UnlockUser),
      },
      {
        path: 'forgot-password',
        loadComponent: () =>
          import('./forgot-password/forgot-password').then(m => m.ForgotPassword),
      },
      {
        path: 'reset-password',
        loadComponent: () => import('./reset-password/reset-password').then(m => m.ResetPassword),
      },
      {
        path: 'maintenance',
        loadComponent: () => import('./maintenance/maintenance').then(m => m.Maintenance),
      },
    ],
  },
];
