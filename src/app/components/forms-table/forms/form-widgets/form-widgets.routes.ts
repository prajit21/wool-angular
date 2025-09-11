import { Routes } from '@angular/router';

export const FormWidgets: Routes = [
  {
    path: '',
    children: [
      {
        path: 'datepicker',
        loadComponent: () => import('./date-picker/date-picker').then(m => m.DatePicker),
        data: {
          title: 'Date Picker',
          breadcrumb: 'Date Picker',
        },
      },
      {
        path: 'touchspin',
        loadComponent: () => import('./touch-spin/touch-spin').then(m => m.TouchSpin),
        data: {
          title: 'Touchspin',
          breadcrumb: 'Touchspin',
        },
      },
      {
        path: 'select2',
        loadComponent: () => import('./select2/select2').then(m => m.Select2),
        data: {
          title: 'Select2',
          breadcrumb: 'Select2',
        },
      },
      {
        path: 'switch',
        loadComponent: () => import('./switch/switch').then(m => m.Switch),
        data: {
          title: 'Switch',
          breadcrumb: 'Switch',
        },
      },
      {
        path: 'type-ahead',
        loadComponent: () => import('./type-ahead/type-ahead').then(m => m.TypeAhead),
        data: {
          title: 'Typeahead',
          breadcrumb: 'Typeahead',
        },
      },
      {
        path: 'clipboard',
        loadComponent: () => import('./clip-board/clip-board').then(m => m.ClipBoard),
        data: {
          title: 'Clipboard',
          breadcrumb: 'Clipboard',
        },
      },
    ],
  },
];
