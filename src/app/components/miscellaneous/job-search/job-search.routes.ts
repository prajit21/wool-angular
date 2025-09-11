import { Routes } from '@angular/router';

export const JobSearch: Routes = [
  {
    path: '',
    children: [
      {
        path: 'cards-view',
        loadComponent: () =>
          import('./job-search-card-view/job-search-card-view').then(m => m.JobSearchCardView),
        data: {
          title: 'Cards View',
          breadcrumb: 'Cards View',
        },
      },
      {
        path: 'list-view',
        loadComponent: () =>
          import('./job-search-list-view/job-search-list-view').then(m => m.JobSearchListView),
        data: {
          title: 'List View',
          breadcrumb: 'List View',
        },
      },
      {
        path: 'job-details',
        loadComponent: () =>
          import('./job-search-job-details/job-search-job-details').then(
            m => m.JobSearchJobDetails,
          ),
        data: {
          title: 'Job Details',
          breadcrumb: 'Job Details',
        },
      },
      {
        path: 'apply',
        loadComponent: () => import('./job-apply/job-apply').then(m => m.JobApply),
        data: {
          title: 'Apply',
          breadcrumb: 'Apply',
        },
      },
    ],
  },
];
