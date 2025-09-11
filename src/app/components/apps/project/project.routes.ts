import { Routes } from '@angular/router';

export const Project: Routes = [
  {
    path: '',
    children: [
      {
        path: 'project-list',
        loadComponent: () => import('./project-list/project-list').then(m => m.ProjectLists),
        data: {
          title: 'Project List',
          breadcrumb: 'Project List',
        },
      },
      {
        path: 'create-new',
        loadComponent: () =>
          import('./create-new-project/create-new-project').then(m => m.CreateNewProject),
        data: {
          title: 'Project Create',
          breadcrumb: 'Project Create',
        },
      },
    ],
  },
];
