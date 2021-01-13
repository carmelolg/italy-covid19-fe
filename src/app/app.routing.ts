import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'region',
        loadChildren: () => import('./region/region.module').then(m => m.RegionModule)
      }
    ]
  }
];
