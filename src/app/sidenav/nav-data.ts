import { INavbarData } from './helper';

export const navbarData: INavbarData[] = [
  {
    routerLink: 'dashboard',
    icon: 'fas fa-home',
    label: 'Dashboard',
  },
  {
    routerLink: 'products',
    icon: 'fas fa-box-open',
    label: 'Products',
    items: [
      {
        routerLink: 'products/level1.1',
        label: 'Level 1.1',
        items: [
          {
            routerLink: 'products/level2.1',
            label: 'Level 2.1',
          },
          {
            routerLink: 'products/level2.2',
            label: 'Level 2.2',
            items: [
              {
                routerLink: 'products/level3.1',
                label: 'Level 3.1',
              },
              {
                routerLink: 'products/level3.2',
                label: 'Level 3.2',
              },
            ],
          },
        ],
      },
      {
        routerLink: 'products/level1.2',
        label: 'Level 1.2',
      },
    ],
  },
  {
    routerLink: 'statistics',
    icon: 'fas fa-chart-bar',
    label: 'Statistics',
  },
  {
    routerLink: 'coupens',
    icon: 'fas fa-tags',
    label: 'Coupens',
    items: [
      {
        routerLink: 'coupens/list',
        label: 'List Coupens',
      },
      {
        routerLink: 'coupens/create',
        label: 'Create Coupens',
      },
    ],
  },
  {
    routerLink: 'pages',
    icon: 'fas fa-file',
    label: 'Pages',
  },
  {
    routerLink: 'media',
    icon: 'fas fa-camera',
    label: 'Media',
  },
  {
    routerLink: 'settings',
    icon: 'fas fa-cog',
    label: 'Settings',
    expanded: true,
    items: [
      {
        routerLink: 'settings/profile',
        label: 'Profile',
      },
      {
        routerLink: 'settings/customize',
        label: 'Customize',
      },
    ],
  },
];
