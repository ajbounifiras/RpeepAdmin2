import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD.COLLAPSIBLE',
    type: 'collapsible',
    // role: ['Admin'], //? To hide collapsible based on user role
    icon: 'home',
    badge: {
      title: '2',
      translate: 'MENU.DASHBOARD.BADGE',
      classes: 'badge-light-warning badge-pill'
    },
    children: [
      {
        id: 'analytics',
        title: 'Analytics',
        translate: 'MENU.DASHBOARD.ANALYTICS',
        type: 'item',
        role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
        icon: 'circle',
        url: 'dashboard/analytics'
      },
      {
        // If role is not assigned will be display to all
        id: 'ecommerce',
        title: 'eCommerce',
        translate: 'MENU.DASHBOARD.ECOMMERCE',
        type: 'item',
        icon: 'circle',
        url: 'dashboard/ecommerce'
      }
    ]
  },
 
  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Menu',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      {
        id: 'user',
        title: 'user',
        translate: 'User',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'add',
            title: 'add',
            translate: 'add ',
            type: 'item',
            icon: 'user-plus',
            url: 'user/add'
          },
          {
            id: 'view',
            title: 'View',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'user/view'
          },
         
        ]
      },
      {
        id: 'ads',
        title: 'ads',
        translate: 'Ads',
        type: 'collapsible',
        icon: 'film',
        children: [
          {
            id: 'add',
            title: 'Add Ads',
            translate: 'add ',
            type: 'item',
            icon: 'user-plus',
            url: 'ads/add'
          },
          {
            id: 'view',
            title: 'View Ads',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'ads/view'
          },
         
        ]
      },
      {
        id: 'advertisers',
        title: 'advertisers',
        translate: 'advertisers',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'add',
            title: 'Add Advertisers',
            translate: 'add ',
            type: 'item',
            icon: 'user-plus',
            url: 'advertiser/add'
          },
          {
            id: 'view',
            title: 'View advertisers',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'advertiser/view'
          },
         
        ]
      },
      {
        id: 'roles',
        title: 'Roles',
        translate: 'roles',
        type: 'collapsible',
        icon: 'clipboard',
        children: [
          {
            id: 'add',
            title: 'add roles',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'roles/add'
          },
          {
            id: 'view ',
            title: 'View roles',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'roles/view'
          },
          {
            id: 'permission ',
            title: 'Permissions',
            translate: 'permission',
            type: 'item',
            icon: 'align-justify',
            url: 'permission'
          },
         
        ]
      },
      {
        id: 'categories',
        title: 'categories',
        translate: 'Categories',
        type: 'collapsible',
        icon: 'grid',
        children: [
          {
            id: 'add',
            title: 'add Categorie',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'categories/add'
          },
          {
            id: 'view ',
            title: 'View Categories',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'categories/view'
          },
         
        ]
      },
      {
        id: 'coupons',
        title: 'coupons',
        translate: 'Coupons',
        type: 'collapsible',
        icon: 'package',
        children: [
          {
            id: 'add',
            title: 'add Coupons',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'coupons/add'
          },
          {
            id: 'view ',
            title: 'View Coupons',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'coupons/view'
          },
         
        ]
      },
      {
        id: 'payments',
        title: 'Payments',
        translate: 'payments',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'add',
            title: 'add Payments',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'payments/add'
          },
          {
            id: 'view ',
            title: 'View Payments',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'payments/view'
          },
          {
            id: 'Add ',
            title: 'Add Methode de Payments',
            translate: 'add',
            type: 'item',
            icon: 'plus',
            url: 'payments/add/methode'
          },
          {
            id: 'Add ',
            title: 'Add Methode de Payments',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'payments/view/methode'
          },
         
        ]
      },
      {
        id: 'prizes',
        title: 'Prizes',
        translate: 'Prizes',
        type: 'collapsible',
        icon: 'gift',
        children: [
          {
            id: 'add',
            title: 'add prizes',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'prizes/add'
          },
          {
            id: 'view ',
            title: 'View Prizes',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'prizes/view'
          },
         
        ]
      },
      {
        id: 'products',
        title: 'Products',
        translate: 'products',
        type: 'collapsible',
        icon: 'shopping-bag',
        children: [
          {
            id: 'add',
            title: 'add Products',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'products/add'
          },
          {
            id: 'view ',
            title: 'View Products',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'products/view'
          },
         
        ]
      },
     
  
      {
        id: 'winners',
        title: 'Winners',
        translate: 'winners',
        type: 'collapsible',
        icon: 'smile',
        children: [
          {
            id: 'add',
            title: 'add winners',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'winners/add'
          },
          {
            id: 'view ',
            title: 'View Winners',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'winners/view'
          },
         
        ]
      },
      {
        id: 'contacts',
        title: 'Contacts',
        translate: 'contacts',
        type: 'item',
        icon: 'phone',
        url: 'contacts'
      },
      
      {
        id: 'statistique',
        title: 'statistique',
        translate: 'statistique',
        type: 'item',
        icon: 'bar-chart-2',
        url: 'statistics'
      },
      {
        id: 'reclamations',
        title: 'Reclamations',
        translate: 'reclamations',
        type: 'collapsible',
        icon: 'frown',
        children: [
          {
            id: 'add',
            title: 'add reclamations',
            translate: 'add ',
            type: 'item',
            icon: 'plus',
            url: 'reclamations/add'
          },
          {
            id: 'view ',
            title: 'View Reclamations',
            translate: 'view',
            type: 'item',
            icon: 'circle',
            url: 'reclamations/view'
          },
         
        ]
      },
     
      {
        id: 'historique',
        title: 'historique',
        translate: 'historique',
        type: 'item',
        icon: 'clock',
        url: 'historique'
      },
      
    ]
  },
 
];

