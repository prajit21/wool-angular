import { Routes } from '@angular/router';

export const Icons: Routes = [
  {
    path: '',
    children: [
      {
        path: 'flag-icon',
        loadComponent: () => import('./flag-icon/flag-icon').then(m => m.FlagIcon),
        data: {
          title: 'Flag Icons',
          breadcrumb: 'Flag Icons',
        },
      },
      {
        path: 'font-awesome-icon',
        loadComponent: () =>
          import('./font-awesome-icon/font-awesome-icon').then(m => m.FontAwesomeIcon),
        data: {
          title: 'Font Awesome Icons',
          breadcrumb: 'Font Awesome Icons',
        },
      },
      {
        path: 'ico-icon',
        loadComponent: () => import('./ico-icon/ico-icon').then(m => m.IcoIcon),
        data: {
          title: 'ICO Icons',
          breadcrumb: 'ICO Icons',
        },
      },
      {
        path: 'thimify-icon',
        loadComponent: () => import('./themify-icon/themify-icon').then(m => m.ThemifyIcon),
        data: {
          title: 'Themify Icons',
          breadcrumb: 'Themify Icons',
        },
      },
      {
        path: 'feather-icon',
        loadComponent: () => import('./feather-icon/feather-icon').then(m => m.FeatherIcon),
        data: {
          title: 'Feather Icons',
          breadcrumb: 'Feather Icons',
        },
      },
      {
        path: 'weather-icon',
        loadComponent: () => import('./weather-icon/weather-icon').then(m => m.WeatherIcon),
        data: {
          title: 'Weather Icons',
          breadcrumb: 'Weather Icons',
        },
      },
    ],
  },
];
