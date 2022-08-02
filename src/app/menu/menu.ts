import { CoreMenu } from '@core/types';

//? DOC: http://localhost:7777/demo/vuexy-angular-admin-dashboard-template/documentation/guide/development/navigation-menus.html#interface

export const menu: CoreMenu[] = [
  // Dashboard
  {
    id: 'dashboard',
    title: 'Dashboard',
    translate: 'MENU.DASHBOARD.ANALYTICS',
    type: 'item',
    role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
    icon: 'circle',
    url: 'dashboard/analytics'
  },
  // {
  //   id: 'dashboard',
  //   title: 'Dashboard',
  //   translate: 'MENU.DASHBOARD.COLLAPSIBLE',
  //   type: 'collapsible',
  //   // role: ['Admin'], //? To hide collapsible based on user role
  //   icon: 'home',
  //   badge: {
  //     title: '2',
  //     translate: 'MENU.DASHBOARD.BADGE',
  //     classes: 'badge-light-warning badge-pill'
  //   },
  //   children: [
  //     {
  //       id: 'analytics',
  //       title: 'Analytics',
  //       translate: 'MENU.DASHBOARD.ANALYTICS',
  //       type: 'item',
  //       role: ['Admin'], //? To set multiple role: ['Admin', 'Client']
  //       icon: 'circle',
  //       url: 'dashboard/analytics'
  //     }
  //   ]
  // },

  // Apps & Pages
  {
    id: 'apps',
    type: 'section',
    title: 'Menu',
    translate: 'MENU.APPS.SECTION',
    icon: 'package',
    children: [
      // {
      // id: 'ads',
      // title: 'ads',
      // translate: 'Ads',
      // type: 'collapsible',
      // icon: 'film',
      // children: [
      //   {
      //     id: 'add Ads ',
      //     title: 'Add Ads',
      //     translate: 'add Ads ',
      //     type: 'item',
      //     icon: 'user-plus',
      //     url: 'ads/add'
      //   },
      //   {
      //     id: 'view Ads',
      //     title: 'View Ads',
      //     translate: 'view Ads',
      //     type: 'item',
      //     icon: 'circle',
      //     url: 'ads/view'
      //   },

      // ]
      // },
      // {
      //   id: 'advertisers',
      //   title: 'advertisers',
      //   translate: 'advertisers',
      //   type: 'collapsible',
      //   icon: 'user',
      //   children: [
      //     {
      //       id: 'add advertisers',
      //       title: 'Add Advertisers',
      //       translate: 'add advertisers',
      //       type: 'item',
      //       icon: 'user-plus',
      //       url: 'advertiser/add'
      //     },
      //     {
      //       id: 'view advertisers',
      //       title: 'View advertisers',
      //       translate: 'view advertisers',
      //       type: 'item',
      //       icon: 'circle',
      //       url: 'advertiser/view'
      //     },

      //   ]
      // },
      {
        id: 'products',
        title: 'Products',
        translate: 'MENU.DASHBOARD.Products',
        type: 'collapsible',
        icon: 'shopping-bag',
        children: [
          {
            id: 'add product',
            title: 'add Products',
            translate: 'MENU.DASHBOARD.addProduct',
            type: 'item',
            icon: 'plus',
            url: 'products/add'
          },
          {
            id: 'view product',
            title: 'View Products',
            translate: 'MENU.DASHBOARD.viewProduct',
            type: 'item',
            icon: 'circle',
            url: 'products/view'
          },

        ]
      },
      {
        id: 'coupons',
        title: 'coupons',
        translate: 'MENU.DASHBOARD.Coupons',
        type: 'collapsible',
        icon: 'package',
        children: [
          {
            id: 'add coupon',
            title: 'add Coupons',
            translate: 'MENU.DASHBOARD.addCoupon',
            type: 'item',
            icon: 'plus',
            url: 'coupons/add'
          },
          {
            id: 'view coupon',
            title: 'View Coupons',
            translate: 'MENU.DASHBOARD.viewCoupon',
            type: 'item',
            icon: 'circle',
            url: 'coupons/view'
          },

        ]
      },
      {
        id: 'prizes',
        title: 'Prizes',
        translate: 'MENU.DASHBOARD.Prizes',
        type: 'collapsible',
        icon: 'gift',
        children: [
          {
            id: 'add prize',
            title: 'add prizes',
            translate: 'MENU.DASHBOARD.addPrize',
            type: 'item',
            icon: 'plus',
            url: 'prizes/add'
          },
          {
            id: 'view prize',
            title: 'View Prizes',
            translate: 'MENU.DASHBOARD.viewPrize',
            type: 'item',
            icon: 'circle',
            url: 'prizes/view'
          },

        ]
      },
      {
        id: 'winners',
        title: 'Winners',
        translate: 'MENU.DASHBOARD.Winners',
        type: 'collapsible',
        icon: 'smile',
        children: [
          {
            id: 'add winner',
            title: 'add winners',
            translate: 'MENU.DASHBOARD.addWinner',
            type: 'item',
            icon: 'plus',
            url: 'winners/add'
          },
          {
            id: 'view winner ',
            title: 'View Winners',
            translate: 'MENU.DASHBOARD.viewWinner',
            type: 'item',
            icon: 'circle',
            url: 'winners/view'
          },

        ]
      },
      {
        id: 'contacts',
        title: 'Contacts',
        translate: 'MENU.DASHBOARD.Contacts',
        type: 'item',
        icon: 'phone',
        url: 'contacts'
      },

      {
        id: 'payments',
        title: 'Payments',
        translate: 'MENU.DASHBOARD.Payments',
        type: 'collapsible',
        icon: 'credit-card',
        children: [
          {
            id: 'add payment',
            title: 'add Payments',
            translate: 'MENU.DASHBOARD.addPayment',
            type: 'item',
            icon: 'plus',
            url: 'payments/add'
          },
          {
            id: 'view payment ',
            title: 'View Payments',
            translate: 'MENU.DASHBOARD.viewPayment',
            type: 'item',
            icon: 'circle',
            url: 'payments/view'
          }


        ]
      },


      {
        id: 'Statistics',
        title: 'Statistics',
        translate: 'MENU.DASHBOARD.Statistics',
        type: 'item',
        icon: 'bar-chart-2',
        url: 'statistics'
      },
      {
        id: 'reclamations',
        title: 'Reclamations',
        translate: 'MENU.DASHBOARD.Reclamations',
        type: 'collapsible',
        icon: 'frown',
        children: [
          {
            id: 'add reclamation',
            title: 'add reclamations',
            translate: 'MENU.DASHBOARD.addComplaint',
            type: 'item',
            icon: 'plus',
            url: 'reclamations/add'
          },
          {
            id: 'view reclamation',
            title: 'View Reclamations',
            translate: 'MENU.DASHBOARD.viewComplaint',
            type: 'item',
            icon: 'circle',
            url: 'reclamations/view'
          },

        ]
      },
      // {
      //   id: 'categories',
      //   title: 'categories',
      //   translate: 'Categories',
      //   type: 'collapsible',
      //   icon: 'grid',
      //   children: [
      //     {
      //       id: 'add categorie',
      //       title: 'add Categorie',
      //       translate: 'add categorie ',
      //       type: 'item',
      //       icon: 'plus',
      //       url: 'categories/add'
      //     },
      //     {
      //       id: 'view categorie ',
      //       title: 'View Categorie',
      //       translate: 'view categorie',
      //       type: 'item',
      //       icon: 'circle',
      //       url: 'categories/view'
      //     },

      //   ]
      // },
      // {
      //   id: 'roles',
      //   title: 'Roles',
      //   translate: 'roles',
      //   type: 'collapsible',
      //   icon: 'clipboard',
      //   children: [
      //     {
      //       id: 'add roles',
      //       title: 'add roles',
      //       translate: 'add roles ',
      //       type: 'item',
      //       icon: 'plus',
      //       url: 'roles/add'
      //     },
      //     {
      //       id: 'view roles ',
      //       title: 'View roles',
      //       translate: 'view roles',
      //       type: 'item',
      //       icon: 'circle',
      //       url: 'roles/view'
      //     },
      //     {
      //       id: 'permission ',
      //       title: 'Permissions',
      //       translate: 'permission',
      //       type: 'item',
      //       icon: 'align-justify',
      //       url: 'permission'
      //     },

      //   ]
      // },
      {
        id: 'user',
        title: 'user',
        translate: 'MENU.DASHBOARD.User',
        type: 'collapsible',
        icon: 'user',
        children: [
          {
            id: 'add user',
            title: 'add user',
            translate: 'MENU.DASHBOARD.addUser',
            type: 'item',
            icon: 'user-plus',
            url: 'user/add'
          },
          {
            id: 'View user',
            title: 'View user',
            translate: 'MENU.DASHBOARD.viewUser',
            type: 'item',
            icon: 'circle',
            url: 'user/view'
          },

        ]
      },

      /* {
         id: 'historique',
         title: 'historique',
         translate: 'historique',
         type: 'item',
         icon: 'clock',
         url: 'historique'
       },*/

    ]
  },
  {
    id: 'slider',
    title: 'Sliders',
    translate: 'MENU.DASHBOARD.Sliders',
    type: 'collapsible',
    icon: 'sliders',
    children: [
      {
        id: 'add slider',
        title: 'add Sliders',
        translate: 'MENU.DASHBOARD.addSlider',
        type: 'item',
        icon: 'plus',
        url: 'sliders/add'
      },
      {
        id: 'view slider',
        title: 'View Sliders',
        translate: 'MENU.DASHBOARD.viewSlider',
        type: 'item',
        icon: 'circle',
        url: 'sliders/view'
      },
    ]
  },
  {
    id: 'pub',
    title: 'Pubs',
    translate: 'MENU.DASHBOARD.Pubs',
    type: 'collapsible',
    icon: 'airplay',
    children: [
      {
        id: 'add pub',
        title: 'add Pubs',
        translate: 'MENU.DASHBOARD.addPub',
        type: 'item',
        icon: 'plus',
        url: 'pubs/add'
      },
      {
        id: 'view pub',
        title: 'View Pubs',
        translate: 'MENU.DASHBOARD.viewPub',
        type: 'item',
        icon: 'circle',
        url: 'pubs/view'
      },
    ]
  },
];