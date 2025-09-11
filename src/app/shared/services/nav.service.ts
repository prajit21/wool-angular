import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface Menu {
  headTitle1?: string;
  headTitle2?: string;
  path?: string;
  title?: string;
  type?: string;
  icon?: string;
  active?: boolean;
  bookmark?: boolean;
  items?: Menu[];
  level?: number;
  megaMenu?: boolean;
  children?: Menu[];
  pined?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class NavService {
  public closeSidebar: boolean = false;
  public hideNav: boolean = false;
  public language: boolean = false;

  constructor() {}

  public menuItems: Menu[] = [
    {
      headTitle1: 'General',
    },
    {
      title: 'Dashboard',
      icon: 'home',
      type: 'sub',
      active: true,
      level: 1,
      children: [
        { path: '/dashboard/ecommerce', title: 'Ecommerce', type: 'link' },
        { path: '/dashboard/crypto', title: 'Crypto', type: 'link' },
      ],
    },
    {
      title: 'Widgets',
      icon: 'Ui-kites',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/widgets/general', title: 'General', type: 'link' },
        { path: '/widgets/charts', title: 'Chart', type: 'link' },
      ],
    },
    {
      title: 'Page Layout',
      icon: 'Perk-Ui',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/page-layout/hide-nav-scroll',
          title: 'Hide Nav Scroll',
          type: 'link',
        },
        {
          path: '/page-layout/footer-light',
          title: 'Footer Light',
          type: 'link',
        },
        {
          path: '/page-layout/footer-dark',
          title: 'Footer Dark',
          type: 'link',
        },
        {
          path: '/page-layout/footer-fixed',
          title: 'Footer Fixed',
          type: 'link',
        },
      ],
    },
    {
      headTitle1: 'Applications',
    },
    {
      title: 'Project',
      icon: 'project',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/project/project-list', title: 'Project List', type: 'link' },
        { path: '/project/create-new', title: 'Create New', type: 'link' },
      ],
    },
    {
      title: 'File Manager',
      icon: 'file',
      type: 'link',
      path: '/file-manager',
      bookmark: true,
      level: 1,
    },
    {
      title: 'Ecommerce',
      icon: 'ecommerce',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/e-commerce/add-product', title: 'Add Product', type: 'link' },
        { path: '/e-commerce/product', title: 'Product', type: 'link' },
        {
          path: '/e-commerce/product-page',
          title: 'Product Page',
          type: 'link',
        },
        {
          path: '/e-commerce/product-list',
          title: 'Product List',
          type: 'link',
        },
        {
          path: '/e-commerce/payment-detail',
          title: 'Payment Details',
          type: 'link',
        },
        {
          path: '/e-commerce/order-history',
          title: 'Order History',
          type: 'link',
        },
        {
          title: 'Invoice',
          type: 'sub',
          level: 2,
          children: [
            { path: '/e-commerce/invoice/invoice-1', title: 'Invoice 1', type: 'link' },
            { path: '/e-commerce/invoice/invoice-2', title: 'Invoice 2', type: 'link' },
            { path: '/e-commerce/invoice/invoice-3', title: 'Invoice 3', type: 'link' },
            { path: '/e-commerce/invoice/invoice-4', title: 'Invoice 4', type: 'link' },
            { path: '/e-commerce/invoice/invoice-5', title: 'Invoice 5', type: 'link' },
            { path: '/e-commerce/invoice/invoice-6', title: 'Invoice 6', type: 'link' },
          ],
        },
        { path: '/e-commerce/cart', title: 'Cart', type: 'link' },
        { path: '/e-commerce/wishlist', title: 'Wishlist', type: 'link' },
        { path: '/e-commerce/checkout', title: 'Checkout', type: 'link' },
        { path: '/e-commerce/pricing', title: 'Pricing', type: 'link' },
      ],
    },
    {
      title: 'Letter Box',
      icon: 'email',
      type: 'link',
      path: '/letter-box',
      level: 1,
    },
    {
      title: 'Chat',
      icon: 'chat',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/chat/chat-app', title: 'Chat App', type: 'link' },
        { path: '/chat/video-chat', title: 'Video App', type: 'link' },
      ],
    },
    {
      title: 'Users',
      icon: 'user',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/users/users-profile',
          title: 'Users Profile',
          type: 'link',
        },
        { path: '/users/users-edit', title: 'Users Edit', type: 'link' },
        { path: '/users/users-card', title: 'Users Cards', type: 'link' },
      ],
    },
    {
      title: 'Bookmarks',
      icon: 'bookmark',
      type: 'link',
      path: '/bookmarks',
      level: 1,
    },
    {
      title: 'Contacts',
      icon: 'contact',
      type: 'link',
      path: '/contacts',
      bookmark: true,
      level: 1,
    },
    {
      title: 'Tasks',
      icon: 'task',
      type: 'link',
      path: '/tasks',
      level: 1,
    },
    {
      title: 'Calender',
      icon: 'calendar',
      type: 'link',
      path: '/calender',
      level: 1,
    },
    {
      title: 'Social Apps',
      icon: 'social',
      type: 'link',
      path: '/social-app',
      level: 1,
    },
    {
      title: 'To-Do',
      icon: 'to-do',
      type: 'link',
      path: '/to-do',
      level: 1,
      bookmark: true,
    },
    {
      title: 'Search Result',
      icon: 'search',
      type: 'link',
      path: '/search-result',
      level: 1,
    },
    {
      headTitle1: 'Forms & Table',
    },
    {
      title: 'Forms',
      icon: 'form',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          title: 'Form Controls',
          type: 'sub',
          active: false,
          level: 2,
          children: [
            {
              path: '/forms/form-control/form-validation',
              title: 'Form Validation',
              type: 'link',
            },
            {
              path: '/forms/form-control/base-input',
              title: 'Base Input',
              type: 'link',
            },
            {
              path: '/forms/form-control/checkbox-radio',
              title: 'Checkbox & Radio',
              type: 'link',
            },
            {
              path: '/forms/form-control/input-groups',
              title: 'Input Groups',
              type: 'link',
            },
            {
              path: '/forms/form-control/input-mask',
              title: 'Input Mask',
              type: 'link',
            },
            {
              path: '/forms/form-control/mega-options',
              title: 'Mega Options',
              type: 'link',
            },
          ],
        },
        {
          title: 'Form Widgets',
          type: 'sub',
          active: false,
          level: 2,
          children: [
            {
              path: '/forms/form-widgets/datepicker',
              title: 'Datepicker',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/touchspin',
              title: 'Touchspin',
              type: 'link',
            },
            { path: '/forms/form-widgets/select2', title: 'Select2', type: 'link' },
            { path: '/forms/form-widgets/switch', title: 'Switch', type: 'link' },
            {
              path: '/forms/form-widgets/type-ahead',
              title: 'Typeahead',
              type: 'link',
            },
            {
              path: '/forms/form-widgets/clipboard',
              title: 'Clipboard',
              type: 'link',
            },
          ],
        },
      ],
    },
    {
      title: 'Tables',
      icon: 'table',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          title: 'Bootstrap Tables',
          type: 'sub',
          active: false,
          level: 2,
          children: [
            {
              path: '/table/bootstrap-tables/basic-tables',
              title: 'Basic Tables',
              type: 'link',
            },
            {
              path: '/table/bootstrap-tables/table-components',
              title: 'Table Components',
              type: 'link',
            },
          ],
        },
        {
          title: 'Data Tables',
          path: '/table/data-table',
          type: 'link',
          level: 2,
        },
      ],
    },
    {
      headTitle1: 'Components',
    },
    {
      title: 'UI Kits',
      icon: 'ui-kits',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/ui-kits/typography', title: 'Typography', type: 'link' },
        { path: '/ui-kits/avatars', title: 'Avatars', type: 'link' },
        {
          path: '/ui-kits/helper-classes',
          title: 'Helper Classes',
          type: 'link',
        },
        { path: '/ui-kits/grid', title: 'Grid', type: 'link' },
        { path: '/ui-kits/tag-pills', title: 'Tag & Pills', type: 'link' },
        { path: '/ui-kits/progress', title: 'Progress', type: 'link' },
        { path: '/ui-kits/modal', title: 'Modal', type: 'link' },
        { path: '/ui-kits/alert', title: 'Alert', type: 'link' },
        { path: '/ui-kits/popover', title: 'Popover', type: 'link' },
        { path: '/ui-kits/tooltip', title: 'Tooltip', type: 'link' },
        { path: '/ui-kits/dropdown', title: 'Dropdown', type: 'link' },
        { path: '/ui-kits/accordion', title: 'Accordion', type: 'link' },
        { path: '/ui-kits/tabs', title: 'Tabs', type: 'link' },
        { path: '/ui-kits/lists', title: 'Lists', type: 'link' },
      ],
    },
    {
      title: 'Bonus UI',
      icon: 'bonus-kit',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/bonus-ui/toasts', title: 'Toast', type: 'link' },
        { path: '/bonus-ui/rating', title: 'Rating', type: 'link' },
        { path: '/bonus-ui/dropzone', title: 'Dropzone', type: 'link' },
        {
          path: '/bonus-ui/sweet-alert2',
          title: 'SweetAlert2',
          type: 'link',
        },
        {
          path: '/bonus-ui/owl-carousel',
          title: 'Owl carousel',
          type: 'link',
        },
        { path: '/bonus-ui/ribbons', title: 'Ribbons', type: 'link' },
        { path: '/bonus-ui/pagination', title: 'Pagination', type: 'link' },
        { path: '/bonus-ui/breadcrumb', title: 'Breadcrumb', type: 'link' },
        {
          path: '/bonus-ui/range-slider',
          title: 'Range Slider',
          type: 'link',
        },
        {
          path: '/bonus-ui/image-cropper',
          title: 'Image Cropper',
          type: 'link',
        },
        { path: '/bonus-ui/basic-card', title: 'Basic Card', type: 'link' },
        {
          path: '/bonus-ui/creative-card',
          title: 'Creative Card',
          type: 'link',
        },
        { path: '/bonus-ui/timeline', title: 'Timeline', type: 'link' },
      ],
    },
    {
      title: 'Icons',
      icon: 'icons',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/icon/flag-icon', title: 'Flag Icon', type: 'link' },
        {
          path: '/icon/font-awesome-icon',
          title: 'Fontawesome Icon',
          type: 'link',
        },
        { path: '/icon/ico-icon', title: 'Ico Icon', type: 'link' },
        { path: '/icon/thimify-icon', title: 'Themify Icon', type: 'link' },
        { path: '/icon/feather-icon', title: 'Feather Icon', type: 'link' },
        { path: '/icon/weather-icon', title: 'Weather Icon', type: 'link' },
      ],
    },
    {
      title: 'Buttons',
      icon: 'button',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/button/default-style',
          title: 'Default Style',
          type: 'link',
        },
        {
          path: '/button/button-group',
          title: 'Button Group',
          type: 'link',
        },
      ],
    },
    {
      title: 'Charts',
      icon: 'charts',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/charts/apex-chart', title: 'Apex Chart', type: 'link' },
        {
          path: '/charts/google-chart',
          title: 'Google Chart',
          type: 'link',
        },
        { path: '/charts/chartjs', title: 'Chartjs Chart', type: 'link' },
        { path: '/charts/chartist', title: 'Chartist Chart', type: 'link' },
      ],
    },
    {
      headTitle1: 'Pages',
    },
    {
      path: '/sample-page',
      title: 'Sample Page',
      icon: 'sample-page',
      type: 'link',
      level: 1,
    },
    {
      title: 'Others',
      icon: 'others',
      type: 'sub',
      level: 1,
      megaMenu: true,
      children: [
        {
          title: 'Error Pages',
          type: 'sub',
          active: false,
          level: 1,
          children: [
            {
              path: '/error-page/error400',
              title: 'Error Page 400',
              type: 'link',
            },
            {
              path: '/error-page/error401',
              title: 'Error Page 401',
              type: 'link',
            },
            {
              path: '/error-page/error403',
              title: 'Error Page 403',
              type: 'link',
            },
            {
              path: '/error-page/error404',
              title: 'Error Page 404',
              type: 'link',
            },
            {
              path: '/error-page/error500',
              title: 'Error Page 500',
              type: 'link',
            },
            {
              path: '/error-page/error503',
              title: 'Error Page 503',
              type: 'link',
            },
          ],
        },
        {
          title: 'Authentication',
          type: 'sub',
          active: false,
          level: 1,
          children: [
            {
              path: '/authentication/simple-login',
              title: 'Login Simple',
              type: 'link',
            },
            {
              path: '/authentication/login-bg-image',
              title: 'Login with Bg image',
              type: 'link',
            },
            {
              path: '/authentication/login-image-two',
              title: 'Login with Image two',
              type: 'link',
            },
            {
              path: '/authentication/login-validation',
              title: 'Login with Validation',
              type: 'link',
            },
            {
              path: '/authentication/login-tooltip',
              title: 'Login with Tooltip',
              type: 'link',
            },
            {
              path: '/authentication/login-sweet-alert',
              title: 'Login with Sweetalert',
              type: 'link',
            },
            {
              path: '/authentication/register-simple',
              title: 'Register Simple',
              type: 'link',
            },
            {
              path: '/authentication/register-bg-image',
              title: 'Register with Bg image',
              type: 'link',
            },
            {
              path: '/authentication/register-image-two',
              title: 'Register with image two',
              type: 'link',
            },
            {
              path: '/authentication/unlock-user',
              title: 'Unlock User',
              type: 'link',
            },
            {
              path: '/authentication/forgot-password',
              title: 'Forgot Password',
              type: 'link',
            },
            {
              path: '/authentication/reset-password',
              title: 'Reset Password',
              type: 'link',
            },
            {
              path: '/authentication/maintenance',
              title: 'Maintenance',
              type: 'link',
            },
          ],
        },
        {
          title: 'Coming Soon',
          type: 'sub',
          active: false,
          level: 1,
          children: [
            {
              path: '/coming-soon/coming-simple',
              title: 'Coming Simple',
              type: 'link',
            },
            {
              path: '/coming-soon/coming-with-bg-video',
              title: 'Coming with Bg video',
              type: 'link',
            },
            {
              path: '/coming-soon/coming-with-bg-image',
              title: 'Coming with Bg Image',
              type: 'link',
            },
          ],
        },
        {
          title: 'Email templates',
          type: 'sub',
          active: false,
          level: 1,
          children: [
            {
              path: 'https://admin.pixelstrap.com/boho/template/basic-template.html',
              title: 'Basic Email',
              type: 'extTabLink',
            },
            {
              path: 'https://admin.pixelstrap.com/boho/template/email-header.html',
              title: 'Basic With Header',
              type: 'extTabLink',
            },
            {
              path: 'https://admin.pixelstrap.com/boho/template/template-email.html',
              title: 'Ecommerce Template',
              type: 'extTabLink',
            },
            {
              path: 'https://admin.pixelstrap.com/boho/template/template-email-2.html',
              title: 'Email Template 2',
              type: 'extTabLink',
            },
            {
              path: 'https://admin.pixelstrap.com/boho/template/ecommerce-templates.html',
              title: 'Ecommerce Email',
              type: 'extTabLink',
            },
            {
              path: 'https://admin.pixelstrap.com/boho/template/email-order-success.html',
              title: 'Order Success',
              type: 'extTabLink',
            },
          ],
        },
      ],
    },
    {
      headTitle1: 'Miscellaneous',
    },
    {
      title: 'Gallery',
      icon: 'gallery',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/gallery/gallery-grid',
          title: 'Gallery Grid',
          type: 'link',
        },
        {
          path: '/gallery/gallery-grid-desc',
          title: 'Gallery Grid Desc',
          type: 'link',
        },
        {
          path: '/gallery/masonry-gallery',
          title: 'Masonry Gallery',
          type: 'link',
        },
        {
          path: '/gallery/masonry-with-desc',
          title: 'Masonry With Desc',
          type: 'link',
        },
        {
          path: '/gallery/hover-effects',
          title: 'Hover Effect',
          type: 'link',
        },
      ],
    },
    {
      title: 'Blog',
      icon: 'blog',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/blog/blog-details', title: 'Blog Details', type: 'link' },
        { path: '/blog/blog-single', title: 'Blog Single', type: 'link' },
        { path: '/blog/add-post', title: 'Add Post', type: 'link' },
      ],
    },
    {
      path: '/faq',
      title: 'FAQ',
      icon: 'faq',
      type: 'link',
      active: false,
      level: 1,
    },
    {
      title: 'Job Search',
      icon: 'job-search',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/job-search/cards-view',
          title: 'Card View',
          type: 'link',
        },
        { path: '/job-search/list-view', title: 'List View', type: 'link' },
        {
          path: '/job-search/job-details',
          title: 'Job Details',
          type: 'link',
        },
        { path: '/job-search/apply', title: 'Apply', type: 'link' },
      ],
    },
    {
      title: 'Learning',
      icon: 'learning',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        {
          path: '/learning/learning-list',
          title: 'Learning List',
          type: 'link',
        },
        {
          path: '/learning/detailed-course',
          title: 'Detailed Course',
          type: 'link',
        },
      ],
    },
    {
      title: 'Maps',
      icon: 'maps',
      type: 'sub',
      active: false,
      level: 1,
      children: [
        { path: '/maps/google-map', title: 'Google Map', type: 'link' },
        { path: '/maps/leaflet-map', title: 'Leaflet Maps', type: 'link' },
      ],
    },
    {
      title: 'Editors',
      icon: 'editors',
      active: false,
      level: 1,
      type: 'sub',
      children: [
        { path: '/editors/ngx-editors', title: 'NGX Editor', type: 'link' },
        {
          path: '/editors/kolkov-editors',
          title: 'Kolkov Editor',
          type: 'link',
        },
      ],
    },
    {
      path: '/knowledgebase',
      title: 'Knowledgebase',
      icon: 'knowledgebase',
      type: 'link',
      active: false,
      level: 1,
    },
    {
      path: '/support-ticket',
      title: 'Support Ticket',
      icon: 'support-tickets',
      active: false,
      level: 1,
      type: 'link',
    },
  ];

  // Array
  items = new BehaviorSubject<Menu[]>(this.menuItems);
}
