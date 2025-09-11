import { Routes } from '@angular/router';

export const User: Routes = [
  {
    path: '',
    children: [
      {
        path: 'users-profile',
        loadComponent: () => import('./user-profile/user-profile').then(m => m.UserProfile),
        data: {
          title: 'User Profile',
          breadcrumb: 'User Profile',
        },
      },
      {
        path: 'users-edit',
        loadComponent: () => import('./user-edit/user-edit').then(m => m.UserEdit),
        data: {
          title: 'Edit Profile',
          breadcrumb: 'Edit Profile',
        },
      },
      {
        path: 'users-card',
        loadComponent: () => import('./user-cards/user-cards').then(m => m.UserCards),
        data: {
          title: 'User Cards',
          breadcrumb: 'User Cards',
        },
      },
    ],
  },
];
