import { Routes } from '@angular/router';

export const content: Routes = [
  {
    path: 'dashboard',
    data: {
      title: 'Default',
      breadcrumb: 'Dashboard',
    },
    loadChildren: () =>
      import('../../../app/components/general/dashboard/dashboard.routes').then(r => r.dashboard),
  },
  {
    path: 'widgets',
    data: {
      title: 'Widgets',
      breadcrumb: 'Widgets',
    },
    loadChildren: () =>
      import('../../../app/components/general/widgets/widgets.routes').then(r => r.widgets),
  },
  {
    path: 'page-layout',
    data: {
      title: 'Page Layout',
      breadcrumb: 'Page Layout',
    },
    loadChildren: () =>
      import('../../../app/components/general/page-layout/page-layout.routes').then(r => r.hidenav),
  },
  {
    path: 'project',
    data: {
      title: 'Project',
      breadcrumb: 'Project',
    },
    loadChildren: () =>
      import('../../../app/components/apps/project/project.routes').then(r => r.Project),
  },
  {
    path: 'file-manager',
    data: {
      title: 'File manager',
      breadcrumb: 'File manager',
    },
    loadChildren: () =>
      import('../../../app/components/apps/file-manager/file-manager.routes').then(
        r => r.FileManager,
      ),
  },
  {
    path: 'e-commerce',
    data: {
      title: 'Ecommerce',
      breadcrumb: 'Ecommerce',
    },
    loadChildren: () =>
      import('../../components/apps/e-commerce/ecommerce.routes').then(r => r.Ecommerce),
  },
  {
    path: 'e-commerce/invoice',
    data: {
      title: 'Invoice',
      breadcrumb: 'Ecommerce',
    },
    loadChildren: () =>
      import('../../components/apps/e-commerce/invoice/invoice.routes').then(r => r.Invoice),
  },
  {
    path: 'letter-box',
    data: {
      title: 'Email',
      breadcrumb: 'Email',
    },
    loadChildren: () =>
      import('../../components/apps/letter-box/letter-box.routes').then(r => r.Email),
  },
  {
    path: 'chat',
    data: {
      breadcrumb: 'chat',
    },
    loadChildren: () => import('../../components/apps/chat/chat.routes').then(r => r.Chat),
  },
  {
    path: 'users',
    data: {
      title: 'User Profile',
      breadcrumb: 'User',
    },
    loadChildren: () => import('../../components/apps/users/user.routes').then(r => r.User),
  },
  {
    path: 'bookmarks',
    data: {
      title: 'Bookmark',
      breadcrumb: 'App',
    },
    loadChildren: () =>
      import('../../components/apps/bookmark/bookmarks.routes').then(r => r.Bookmarks),
  },
  {
    path: 'contacts',
    data: {
      title: 'Contacts',
      breadcrumb: 'App',
    },
    loadChildren: () =>
      import('../../components/apps/contact/contacts.routes').then(r => r.Contact),
  },
  {
    path: 'tasks',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../components/apps/tasks/tasks.routes').then(r => r.Tasks),
  },
  {
    path: 'calender',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () =>
      import('../../components/apps/calendar/calender.routes').then(r => r.calendar),
  },
  {
    path: 'social-app',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () =>
      import('../../components/apps/social-apps/soical.routes').then(r => r.SoicalApp),
  },
  {
    path: 'to-do',
    data: {
      breadcrumb: 'Apps',
    },
    loadChildren: () => import('../../components/apps/to-do/todo.routes').then(r => r.Todo),
  },
  {
    path: 'search-result',
    data: {
      breadcrumb: 'Search Pages',
    },
    loadChildren: () =>
      import('../../components/apps/search-result/search-result.routes').then(r => r.Search),
  },
  {
    path: 'forms/form-control',
    data: {
      breadcrumb: 'Form-Controls',
    },
    loadChildren: () =>
      import('../../components/forms-table/forms/form-control/form-controls.routes').then(
        r => r.FormContols,
      ),
  },
  {
    path: 'forms/form-widgets',
    data: {
      breadcrumb: 'Form Widgets',
    },
    loadChildren: () =>
      import('../../components/forms-table/forms/form-widgets/form-widgets.routes').then(
        r => r.FormWidgets,
      ),
  },
  {
    path: 'table/bootstrap-tables',
    data: {
      breadcrumb: 'Table',
    },
    loadChildren: () =>
      import('../../components/forms-table/tables/bootstrap-tables/bootstrap.routes').then(
        r => r.bootstrapTables,
      ),
  },
  {
    path: 'table/data-table',
    data: {
      title: 'Data Table',
      breadcrumb: 'Data Table',
    },
    loadChildren: () =>
      import('../../components/forms-table/tables/data-table/data-table.routes').then(
        r => r.DataTable,
      ),
  },
  {
    path: 'ui-kits',
    data: {
      title: 'Ui-kits',
      breadcrumb: 'Ui-kits',
    },
    loadChildren: () =>
      import('../../components/components/ui-kits/ui-kits.routes').then(r => r.UiKits),
  },
  {
    path: 'bonus-ui',
    data: {
      title: 'Bonus Ui',
      breadcrumb: 'Bonus Ui',
    },
    loadChildren: () =>
      import('../../components/components/bonus-ui/bonus-ui.routes').then(r => r.BonusUi),
  },
  {
    path: 'icon',
    data: {
      title: 'Icons',
      breadcrumb: 'Icons',
    },
    loadChildren: () => import('../../components/components/icons/icons.routes').then(r => r.Icons),
  },
  {
    path: 'buttons',
    data: {
      title: 'Buttons',
      breadcrumb: 'Buttons',
    },
    loadChildren: () =>
      import('../../components/components/buttons/buttons.routes').then(r => r.Buttons),
  },
  {
    path: 'charts',
    data: {
      title: 'Charts',
      breadcrumb: 'Charts',
    },
    loadChildren: () =>
      import('../../components/components/charts/charts.routes').then(r => r.Charts),
  },
  {
    path: 'sample-page',
    data: {
      title: 'Sample Page',
      breadcrumb: 'Sample Page',
    },
    loadChildren: () =>
      import('../../components/pages/sample-page/sample-page.routes').then(r => r.SamplePage),
  },
  {
    path: 'gallery',
    data: {
      breadcrumb: 'Gallery',
    },
    loadChildren: () =>
      import('../../components/miscellaneous/gallery/gallery.routes').then(r => r.Gallery),
  },
  {
    path: 'blog',
    data: {
      breadcrumb: 'Blog',
    },
    loadChildren: () => import('../../components/miscellaneous/blog/blog.routes').then(r => r.Blog),
  },
  {
    path: 'faq',
    data: {
      breadcrumb: 'FAQ',
    },
    loadChildren: () => import('../../components/miscellaneous/faq/faq.routes').then(r => r.Faq),
  },
  {
    path: 'job-search',
    data: {
      breadcrumb: 'Job Search',
    },
    loadChildren: () =>
      import('../../components/miscellaneous/job-search/job-search.routes').then(r => r.JobSearch),
  },
  {
    path: 'learning',
    data: {
      breadcrumb: 'Learning',
    },
    loadChildren: () =>
      import('../../components/miscellaneous/learning/learning.routes').then(r => r.Learning),
  },
  {
    path: 'maps',
    data: {
      breadcrumb: 'Maps',
    },
    loadChildren: () => import('../../components/miscellaneous/maps/maps.routes').then(r => r.Maps),
  },
  {
    path: 'editors',
    data: {
      breadcrumb: 'Editors',
    },
    loadChildren: () =>
      import('../../components/miscellaneous/editors/editor.routes').then(r => r.Editor),
  },
  {
    path: 'knowledgebase',
    data: {
      title: 'Knowledgebase',
      breadcrumb: 'knowledgebase',
    },
    loadChildren: () =>
      import('../../components/miscellaneous/knowledgebase/knowlegebase.routes').then(
        r => r.Knowledgebase,
      ),
  },
  {
    path: 'support-ticket',
    data: {
      title: 'Support Ticket',
      breadcrumb: 'Apps',
    },
    loadChildren: () =>
      import('../../components/miscellaneous/support-ticket/support-ticket.routes').then(
        r => r.SupportTicket,
      ),
  },
];
