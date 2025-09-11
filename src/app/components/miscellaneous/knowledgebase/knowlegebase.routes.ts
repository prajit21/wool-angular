import { Routes } from '@angular/router';

export const Knowledgebase: Routes = [
  {
    path: '',
    loadComponent: () => import('./knowledgebase').then(m => m.Knowledgebase),
  },
];
