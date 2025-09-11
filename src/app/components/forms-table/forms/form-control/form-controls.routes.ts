import { Routes } from '@angular/router';

export const FormContols: Routes = [
  {
    path: '',
    children: [
      {
        path: 'form-validation',
        loadComponent: () =>
          import('./form-validation/form-validation').then(m => m.FormValidation),
        data: {
          title: 'Validation Form',
          breadcrumb: 'Validation Forms',
        },
      },
      {
        path: 'base-input',
        loadComponent: () => import('./base-input/base-input').then(m => m.BaseInput),
        data: {
          title: 'Base Inputs',
          breadcrumb: 'Base Inputs',
        },
      },
      {
        path: 'checkbox-radio',
        loadComponent: () => import('./checkbox-radio/checkbox-radio').then(m => m.CheckboxRadio),
        data: {
          title: 'Checkbox & Radio',
          breadcrumb: 'Checkbox & Radio',
        },
      },
      {
        path: 'input-groups',
        loadComponent: () => import('./input-groups/input-groups').then(m => m.InputGroups),
        data: {
          title: 'Input Groups',
          breadcrumb: 'Input Groups',
        },
      },
      {
        path: 'input-mask',
        loadComponent: () => import('./input-mask/input-mask').then(m => m.InputMask),
        data: {
          title: 'Input Mask',
          breadcrumb: 'Input Mask',
        },
      },
      {
        path: 'mega-options',
        loadComponent: () => import('./mega-options/mega-options').then(m => m.MegaOptions),
        data: {
          title: 'Mega Options',
          breadcrumb: 'Mega Options',
        },
      },
    ],
  },
];
